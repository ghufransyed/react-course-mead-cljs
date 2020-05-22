(ns com.ghufran.playground.counter
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))



(defn counter []
  [:div [:h1 "Count:"  ]
   [:span
    [:button "+1"]
    [:button "-1"]
    [:button "Reset"]]])


(defn ^:export run []
  (js/console.log "counter app running"))

