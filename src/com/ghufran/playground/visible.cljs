(ns com.ghufran.playground.visible
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))


(defn visible []
  (let [visible (r/atom false)]
    (fn []
      [:div
       [:h1 "Visible App"]
       [:button {:on-click #(swap! visible not)}
        (if @visible
          "Hide Details"
          "Show Details")]
       [:p (if @visible
             "Here are some details")]])))


#_(defn ^:export ^:dev/after-load run []
  (js/console.log "visible is running!!!")
  (rdom/render [visible] (js/document.getElementById "app")))

