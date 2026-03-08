import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    email : Text;
    message : Text;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("All fields must be filled out");
    };

    let newSubmission : Submission = {
      name;
      email;
      message;
    };

    submissions.add(newSubmission);
  };

  public shared ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };
};
