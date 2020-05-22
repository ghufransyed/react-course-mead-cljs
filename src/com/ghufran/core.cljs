(ns com.ghufran.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(def title "Indecision")
(def subtitle "Put your life in the hands of a computer")
(def option_list
  (map (fn [x] [x (random-uuid) ]) ["Thing One" "Thing One" "Thing Three"]))

option_list

(defn header [title, subtitle]
      [:div
       [:h1 title]
       [:h2 subtitle]])


(defn action []
      [:div
       [:button "What should I do?"]])

(defn option [option_text]
      [:div
       [:p option_text]])


(defn handle_remove_all []
  (js/console.log "handle_remove_all called"))


(defn options [option_list]
      [:div
       [:p "This is the options component"]
       (for [[val uuid] option_list
             :let [key (str uuid)]]
         ^{:key key} [:option val])
       [:button {:on-click handle_remove_all} "Remove All"]])


(map meta (options option_list))


(defn handle_add_option [e]
  (js/e.preventDefault)
  (js/console.log e.target.elements.add_option_text.value))


(defn add-option []
      [:div
       [:p "This is the add-option component"]
       [:form {:on-submit handle_add_option}
        [:input {:placeholder "Enter option text here"
                 :name     :add_option_text}]
        [:button {:type :submit} "Add Option"]]])


(defn indecision-app []
      [:div
       [header title subtitle]
       [action]
       [options option_list]
       [add-option]])


(defn ^:export ^:dev/after-load run []
  (rdom/render [indecision-app] (js/document.getElementById "app"))
  (js/console.log "'run' called"))

