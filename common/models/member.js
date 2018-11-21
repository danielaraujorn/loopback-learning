"use strict";

module.exports = function(Member) {
  Member.remoteMethod("sayMyName", {
    accepts: { arg: "myName", type: "string", required: true },
    description: "Recebe um nome e retorna uma string",
    http: { path: "/say-my-name/:myName", verb: "get" },
    returns: { arg: "theResponse", type: "object" }
  });

  Member.sayMyName = (myName, callback) =>
    callback(null, `Your name is ${myName}`);
};
