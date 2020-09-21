#!/bin/bash

API="http://localhost:4741"
URL_PATH="/users"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \

  echo
