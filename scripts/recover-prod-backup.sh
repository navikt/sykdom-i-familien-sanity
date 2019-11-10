#!/bin/bash

# Remember to run sanity login to authenticate before running this script.

#set -x
programname=$0
display_usage() {
    printf "This script recovers production dataset backups. \n\n"
    printf "Usage: $programname  yyyy-MM-dd \n"
    printf "Example: \n"
    echo "$programname  $(date +'%Y-%m-%d')"
    exit 1
}

#if less than two arguments supplied, display usage
if [  $# -le 0 ]
then
    display_usage
    exit 1
fi

# check whether user had supplied -h or --help . If yes display usage 
	if [[ ( $# == "--help") ||  $# == "-h" ]] 
	then 
		display_usage
		exit 0
	fi 


RECOVERY_DATE=$1

if [ -z "$1" ]
then
    echo "No argument supplied"
else
    BACKUP_FILE=$RECOVERY_DATE-prod
    echo "Recovering dataset: $BACKUP_FILE"
    
    sanity dataset export $BACKUP_FILE $BACKUP_FILE.tar.gz --overwrite
    sanity dataset import $BACKUP_FILE.tar.gz production --replace
fi