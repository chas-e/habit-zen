---
name: Instructional Team Support Request
about: This is a template to request support from the instructional team.
title: Request for Instructor Assistance
labels: help wanted
assignees: ''

---

### Description of Issue

I am unable to create a habit from my version of the application, but my teammates can.

### Error messages || Screen Shots
POST /api/habits 401 14.913 ms - 30 -- current

I was seeing these errors: 
error Error: Habit validation failed: user: Cast to ObjectId failed for value "" at path "user"
    at ValidationError.inspect (/Users/chaspants/Documents/code-me/habit-zen/node_modules/mongoose/lib/error/validation.js:47:26)

    stringValue: '""',
      messageFormat: undefined,
      kind: 'ObjectId',
      value: '',
      path: 'user',
      reason: Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters

  }
  },
  _message: 'Habit validation failed'


### Steps Attempted to Resolve Issue
Reviewed code with my teammates, also searched error online.

### Research
Stack Overflow: https://stackoverflow.com/questions/30051236/argument-passed-in-must-be-a-string-of-24-hex-characters-i-think-it-is

develop reference: 
[When populating in mongoose CastError: Cast to ObjectId ...html.developreference.com › article › When+populatin](https://html.developreference.com/article/16158810/When+populating+in+mongoose+CastError%3A+Cast+to+ObjectId+failed+for+value+%E2%80%9C11%E2%80%9D+at+path+%E2%80%9C_id%E2%80%9D)
