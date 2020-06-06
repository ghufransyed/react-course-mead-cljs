(ns com.ghufran.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))


(defn header
  ([] (header {:title "Indecision"}))
  ([{:keys [title subtitle]
     :or   {title "Indecision"}}]
   [:div
    [:h1 title]
    [:h2 subtitle]]))


(defn pick_option [option_state ]
  (let [picked_option (rand-nth (keys @option_state))]
    (js/console.log picked_option)))


(defn action [option_state]
      [:div
       [:button
        {:on-click #(pick_option option_state)
         :disabled (empty? @option_state)
         :id "what-do"}
        "What should I do?"]])


(defn option [{:keys [option_text option_state id]}]
  [:div {:id (str "option-" id)}
   [:span
    option_text
    [:button {
              :id (str "btn-" id)
              :on-click
              #(swap! option_state dissoc option_text)}
     "Remove"]]])


(defn handle_remove_all [option_state]
  (reset! option_state {}))


(defn options [option_state]
      [:div
       [:button {:id "remove-all"
                 :on-click
                     #(handle_remove_all option_state)
                 :disabled (empty? @option_state)}
        "Remove All"]
       (for [[val uuid id] (map conj  @option_state (range))
             :let [key (str uuid)]]
        ^{:key key}
          [option {:id id
                   :option_text val
                   :option_state option_state}])

       (if (= (count @option_state) 0)
         [:p {:id "get-started-msg"}
          "Please add an option to get started!"])
       ])


(defn handle_add_option [{:keys [event option_state add_option_state]}]
  (do
    (js/event.preventDefault)
    (let [new_option (:form_value @add_option_state)]
      (cond
        (= new_option "")
        (do
          (js/console.log "empty string branch")
          (swap! add_option_state merge {:error "Sorry, that is not a valid entry"}))
        (contains? @option_state new_option)
        (do
          (js/console.log "duplicate string branch")
          (swap! add_option_state merge {:error (str "This item already exists")}))

        :else
        (do
          (js/console.log "actual new option branch")
          (swap! add_option_state merge {:form_value ""
                                         :error      false})
          (swap! option_state assoc new_option (random-uuid))
          (set! (.-value (js/document.getElementById "input-addOption")) "")
          )))))

(def test_add_option_state (atom {:error      false
                                  :form_value ""}))


(defn add-option [option_state]
  (let [add_option_state (r/atom {
                                  :error false
                                  :form_value ""
                                  })]
    (fn []
      (let [error (:error @add_option_state)]
        (do (tap> @add_option_state)
            [:div
             (if error
               [:p {:id "error-msg-addOption"} error])
             (tap> @add_option_state)
             [:form {:id "form-addOption"
                     :on-submit
                         (fn [e]
                           (handle_add_option {:event            e
                                               :add_option_state add_option_state
                                               :option_state     option_state}))}
              [:input {:id           "input-addOption"
                       :placeholder  "Enter option text here"
                       :name         :add_option_text
                       :on-change
                                     (fn [e]
                                       (swap! add_option_state assoc
                                              :form_value e.target.value))
                       }]
              [:button {:type :submit
                        :id   "button-addOption"}
               "Add Option"]]])))))


#_(def test_map
  (into {} (map (fn [x] [x (random-uuid)]) ["Thing One" "Thing Two" "Thing Three"])))


(defn indecision-app
  ([]
   (indecision-app {}))
  ([option_seq]
   (let [option_map (into {}
                          (map (fn [x] [x (random-uuid)])
                               option_seq))
         option_state (r/atom option_map)]
     (fn []
       [:div
        [header {:subtitle
                 "Put your life in the hands of a computer"}]
        [action option_state]
        [options option_state]
        [add-option option_state]]))))


(defn ^:export ^:dev/after-load run []
  (rdom/render [indecision-app] (js/document.getElementById "app"))
  (js/console.log "'run' called"))

