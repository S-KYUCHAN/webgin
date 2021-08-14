#!/bin/bash 

path=$( cd "$(dirname "$0")" ; pwd ) 
cd $path/frontend
yarn build

cd $path/backend 
go run main.go