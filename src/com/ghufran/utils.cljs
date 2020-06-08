(ns com.ghufran.utils
  (:require [cognitect.transit :as t]))

(defn set-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (let [w (t/writer :json-verbose)]
    (as-> js/window v
          (.-localStorage v)
          (.setItem v key (t/write w val)))))

(defn get-item
  "Returns value of `key' from browser's localStorage."
  [key]
  (let [r (t/reader :json)]
    (as-> js/window v
          (.-localStorage v)
          (.getItem v key)
          (t/read r v))))

(defn remove-item!
  "Remove the browser's localStorage value for the given `key`"
  [key]
  (.removeItem (.-localStorage js/window) key))

;(def app_db {:options {:one "1" :two "2"} :selectedOption false})
;(set-item! "app_db" {:options {:one "1" :two "2"} :selectedOption false})
;(get-item "app_db")
;
;(js->clj (.parse js/JSON (.stringify js/JSON (clj->js app_db))) {:keywordize-keys true})
;(js->clj (clj->js app_db) {:keywordize-keys true})
;
;(set-item! "app_db" app_db)
;(get-item "app_db")

