activate application "Discord"
tell application "System Events"
	repeat 1000 times
		set cmd_to_run to do shell script "curl -s localhost:7001 | python3 -c \"import sys, json; print(json.load(sys.stdin)['key'])\""
		keystroke cmd_to_run
		key code 36
		delay (random number from 3.51 to 3.61)
	end repeat
end tell