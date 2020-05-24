(ns com.ghufran.devcards
  (:require [cljsjs.react]
            [cljsjs.react.dom]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [devcards.core :as dc])
  (:require-macros
    [devcards.core :refer [defcard start-devcard-ui!]]))


(defn ^:export ^:after-load run []
  (start-devcard-ui!)
  (js/console.log "devcards loaded"))





