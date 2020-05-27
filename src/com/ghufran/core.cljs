(ns com.ghufran.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(def title "Indecision")
(def subtitle "Put your life in the hands of a computer")


(defn header [title, subtitle]
      [:div
       [:h1 title]
       [:h2 subtitle]])


(defn pick_option [option_state ]
  (let [picked_option (rand-nth (keys @option_state))]
    (js/console.log picked_option)))


(defn action [option_state]
      [:div
       [:button
        {:on-click #(pick_option option_state)}
        "What should I do?"]])

(defn option [option_text]
      [:div
       [:p option_text]])


(defn handle_remove_all []
  (js/console.log "handle_remove_all called"))


(defn options [option_state]
      [:div
       [:p "This is the options component"]
       (for [[val uuid] @option_state
             :let [key (str uuid)]]
         ^{:key key} [:option val])
       [:button {:on-click handle_remove_all} "Remove All"]])




(defn handle_add_option [event, err, option_state]
  (js/event.preventDefault)
  (def new_option event.target.elements.add_option_text.value)
  (set! event.target.elements.add_option_text.value "")
  (cond
      (= new_option "")
        (reset! err "That is not a valid entry")
      (contains? @option_state new_option)
        (do (reset! err (str new_option
                             ": That item already exists")))
      :else
        (do (reset! err false)
            (swap! option_state assoc new_option (random-uuid)))))



(defn add-option [option_state]
  (let [error (r/atom false)]
    (fn []
      [:div
       (if @error
         [:p @error])
       [:form {:on-submit (fn [e]
                            (handle_add_option e
                                               error
                                               option_state))}
        [:input {:placeholder "Enter option text here"
                 :name        :add_option_text}]
        [:button {:type :submit} "Add Option"]]])))


(def option_map
  (into {} (map (fn [x] [x (random-uuid)]) ["Thing One" "Thing Two" "Thing Three"])))

(tap> :hello)
(tap> option_map)


(defn indecision-app []
  (let [option_state (r/atom option_map)]
    (fn []
      [:div
       [header title subtitle]
       [action option_state]
       [options option_state]
       [add-option option_state]])))


(defn ^:export ^:dev/after-load run []
  (rdom/render [indecision-app] (js/document.getElementById "app"))
  (js/console.log "'run' called"))

