#!/bin/bash

REMOTE_STATUS=$(/mnt/c/Program\ Files\ \(x86\)/LogMeIn\ Hamachi/x64/hamachi-2.exe --cli peer 250-853-497 | grep 'connection')
CONCAT_STATUS=$(echo "$REMOTE_STATUS" | xargs)
if [[ "$CONCAT_STATUS" == *"via relay"* ]]
then
	echo 'Device online and connected'
fi
