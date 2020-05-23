(ns com.ghufran.playground.counter
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn counter []
  (let [counter (r/atom 0)]
    (fn []
      [:div [:h1 "Count: " @counter]
       [:span
        [:button {:on-click #(swap! counter inc)} "+1"]
        [:button {:on-click #(swap! counter dec)} "-1"]
        [:button {:on-click #(reset! counter 0)} "Reset"]]])))


(defn ^:export ^:dev/after-load run []
  (rdom/render [counter] (js/document.getElementById "app"))
  (js/console.log "counter app running"))



