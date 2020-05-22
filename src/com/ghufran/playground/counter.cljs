(ns com.ghufran.playground.counter
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))



(defn counter []
  [:div [:h1 "Count:"  ]
   [:span
    [:button "+1"]
    [:button "-1"]
    [:button "Reset"]]])



(defn ^:export ^:dev/after-load run []
  (rdom/render [counter] (js/document.getElementById "app"))
  (js/console.log "counter app running"))

