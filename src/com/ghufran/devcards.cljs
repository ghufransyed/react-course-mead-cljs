(ns com.ghufran.devcards
  (:require [cljsjs.react]
            [cljsjs.react.dom]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [devcards.core]
            [com.ghufran.playground.counter :as c]
            [com.ghufran.playground.visible :as v])
  (:require-macros
    [devcards.core  :as dc
                    :refer [defcard defcard-rg]]))


(defn ^:export ^:after-load run []
  (dc/start-devcard-ui!)
  (js/console.log "devcards loaded"))




(defcard reagent-no-help
         (r/as-element [:h1 "Reagent Example"]))

(defn reagent-component-example []
  [:div "hey there"])

(defcard reagent-no-help
         (r/as-element [reagent-component-example]))


(defcard reagent-macro-1
         (dc/reagent [:div "This works fine"]))

(defcard reagent-macro-2
         (dc/reagent (fn [data-atom _] [:div "this works as well"])))



(defcard counter_card
         "This should display a counter, with +1,-1 and reset buttons"
         (r/as-element [c/counter]))

(defcard visible
         "this should display a button and text with a visibility toggle"
         (r/as-element [v/visible]))

(defcard-rg counter_card
         "This should display a counter, with +1,-1 and reset buttons"
         [c/counter])

(defcard-rg visible
         "This should display a button and text with a visibility toggle"
            [v/visible])



