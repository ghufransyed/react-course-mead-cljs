(ns com.ghufran.playground.counter
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))





(defn handle_add_one [e]
  (js/console.log "handle_add_one"))

(defn handle_minus_one [e]
  (js/console.log "handle_minus_one"))

(defn handle_reset [e]
  (js/console.log "handle_reset"))


(defn counter []
  [:div [:h1 "Count:"  ]
   [:span
    [:button {:on-click handle_add_one} "+1"]
    [:button {:on-click handle_minus_one}"-1"]
    [:button {:on-click handle_reset}"Reset"]]])



(defn ^:export ^:dev/after-load run []
  (rdom/render [counter] (js/document.getElementById "app"))
  (js/console.log "counter app running"))

