#!/bin/bash

# Remember to run sanity login to authenticate before running this script.

#set -x

programname=$0
display_usage() {
    printf "This does backup production dataset and migrates staging dataset to production. \n\n"
    printf "Usage: $programname"
    exit 0
}

# check whether user had supplied -h or --help . If yes display usage
if [[ ( $# == "--help") ||  $# == "-h" ]]
then
    display_usage
    exit 0
fi


# Export staging dataset
sanity dataset export staging staging.tar.gz --overwrite

# Backup production dataset
sanity dataset export production production.tar.gz --overwrite
echo y | sanity dataset import production.tar.gz "$(date +'%Y-%m-%d')-prod"

# Migrate staging dataset to production dataset (import)
sanity dataset import staging.tar.gz production --replace
