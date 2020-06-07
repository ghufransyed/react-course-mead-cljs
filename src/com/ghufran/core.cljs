(ns com.ghufran.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            ["react-modal" :default modal]))


(defn header
  ([] (header {:title "Indecision"}))
  ([{:keys [title subtitle]
     :or   {title "Indecision"}}]
   [:div
    [:h1 title]
    [:h2 subtitle]]))


(defn pick_option [app_db]
  (let [picked_option (rand-nth (keys (:options @app_db)))]
    (js/console.log picked_option)))


(defn action [app_db]
      [:div
       [:button
        {:on-click #(pick_option app_db)
         :disabled (empty? (:options @app_db))
         :id       "what-do"}
        "What should I do?"]])


(defn option [{:keys [option_text option_state id]}]
  [:div {:id (str "option-" id)
         :class "option" }
   [:span
    option_text
    [:button {
              :id (str "btn-" id)
              :class "option-remove-btn"
              :on-click
              #(swap! option_state dissoc option_text)}
     "Remove"]]])


(defn handle_remove_all [app_db]
  (swap! app_db merge {:options []}))


(defn options [app_db]
      [:div
       [:button {:id "remove-all"
                 :on-click
                     #(handle_remove_all app_db)
                 :disabled (empty? (:options @app_db))}
        "Remove All"]
       (for [[val uuid id] (map conj (:options @app_db) (range))
             :let [key (str uuid)]]
        ^{:key key}
          [option {:id id
                   :option_text val
                   :option_state app_db}])

       (if (= (count (:options @app_db)) 0)
         [:p {:id "get-started-msg"}
          "Please add an option to get started!"])
       ])


(defn handle_add_option [{:keys [event app_db add_option_state]}]
  (do
    (js/event.preventDefault)
    (let [new_option (:form_value @add_option_state)]
      (cond
        (= new_option "")
        (do
          (swap! add_option_state merge {:error "Sorry, that is not a valid entry"}))
        (contains? (:options @app_db) (keyword new_option))
          (do
            (swap! add_option_state merge {:error (str "This item already exists")}))

        :else
        (do
          (reset! add_option_state { :form_value ""
                                     :error      false})
          (swap! app_db assoc-in
                 [:options (keyword new_option)] (random-uuid)))))))




(defn add-option [app_db]
  (let [add_option_state (r/atom {
                                  :error false
                                  :form_value ""
                                  })]
    (fn [app_db]
      (let [error (:error @add_option_state)]
        (do
            [:div
             (if error
               [:p {:id "error-msg-addOption"} error])
             [:form {:id "form-addOption"
                     :on-submit
                         (fn [e]
                           (handle_add_option {:event            e
                                               :add_option_state add_option_state
                                               :app_db     app_db}))}
              [:input {:id          "input-addOption"
                       :placeholder "Enter option text here"
                       :name        :add_option_text
                       :on-change
                                    (fn [e]
                                      (swap! add_option_state assoc
                                             :form_value e.target.value))
                       :value       (:form_value @add_option_state)
                       }]
              [:button {:type :submit
                        :id   "button-addOption"}
               "Add Option"]]])))))


#_(defn option-modal [{:keys [selectedOption handle_close_option_modal]}]
  [:> modal
   {:isOpen selectedOption
    :contentLabel "Selected Option"
    :id "option-modal"
    :onRequestClose handle_close_option_modal}

   [:h3 "Selected Option"]
   (if selectedOption
     [:p {:id picked-option} selectedOption])
   [:button {:id "closeModal"
             :on-click handle_close_option_modal}]

   ])

#_(fn [e] (js/console.log "onRequestClose called"))


(defn indecision-app
  ([]
   (indecision-app {}))
  ([option_seq]
   (let [option_map (into {}
                          (map (fn [x] [x (random-uuid)])
                               option_seq))
         option_state (r/atom option_map)
         app_db (r/atom {:options option_map
                         :selectedOption NONE})]
     (fn []
       [:div
        [header {:subtitle
                 "Put your life in the hands of a computer"}]
        [action app_db]
        [options app_db]
        [add-option app_db]
        #_[option-modal {}]
        ]))))


(defn ^:export ^:dev/after-load run []
  (rdom/render [indecision-app] (js/document.getElementById "app"))
  (js/console.log "'run' called"))

