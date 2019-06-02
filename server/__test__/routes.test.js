const request = require("supertest");
const app = require("../app");

describe("Test routes", () => {
  const rootApi = "/todo";

  const body = {
    label: "SOME",
    id: 1,
    done: false
  };

  test("It should response the GET method", done => {
    request(app)
      .get(`${rootApi}/read`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should receive todos empty", done => {
    request(app)
      .get(`${rootApi}/read`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should create a task", done => {
    request(app)
      .post(`${rootApi}/create`)
      .send(body)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should update a task", done => {
    request(app)
      .put(`${rootApi}/update`)
      .send(body)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should delete a task", done => {
    request(app)
      .patch(`${rootApi}/delete`)
      .send(body)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
