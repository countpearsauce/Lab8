# Lab 8 - Starter
Jeremy Lei

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed. This is because it makes project development the easiest since it is done automatically for you and is thus always being done instead of relying on the coder to run tests.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no) 

No

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, you would not unit test the message feature because the message feature is basically the entire app. Unit testing is for smaller parts

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

You could unit test specifically the max message lengths since this is a much smaller scale check that only really needs to involve a single function.