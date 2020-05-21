(ns com.ghufran.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

#_(defn simple-component []
  [:div
   [:p "I am a component"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])




(defn header []
      [:div
       [:h1 "Indecision"]
       [:h2 "Put your life in the hands of a computer"]])


(defn action []
      [:div
       [:button "What should I do?"]])

(defn option []
      [:div
       [:p "This is the option component"]])


(defn options []
      [:div
       [:p "This is the options component"]
       [option]])


(defn add-option []
      [:div
       [:p "This is the add-option component"]])


(defn indecision-app []
      [:div
       [header]
       [action]
       [options]
       [add-option]])


(defn ^:export ^:dev/after-load run []
  (rdom/render [indecision-app] (js/document.getElementById "app"))
  (js/console.log "'run' called"))

