const request = require("supertest");
const app = require("../src/server");
const { People } = require("../src/app/models");

describe("People", () => {
  beforeAll(async () => {
    await People.create({
      name: "MockPerson",
      gender: "Female",
      age: 21
    });
  });

  it("should store a people", async () => {
    const person = {
      name: "Jose",
      gender: "male",
      age: 21
    };
    const response = await request(app)
      .post("/people")
      .send(person);

    expect(response.status).toBe(201);
  });

  it("do not should store a people", async () => {
    const person = {
      name: "Jose",
      gender: "male"
    };
    const response = await request(app)
      .post("/people")
      .send(person);

    expect(response.status).toBe(422);
  });

  it("should get a person ", async () => {
    const person = await People.findOne();
    const response = await request(app).get(`/people/${person.id}`);
    expect(response.status).toBe(200);
  });

  it("do not should get a person with invalid id", async () => {
    const response = await request(app).get(`/people/${-1}`);
    expect(response.status).toBe(404);
  });

  it("should list the people", async () => {
    const response = await request(app).get("/people");
    expect(response.status).toBe(200);
  });

  it("should update a person", async () => {
    const person = {
      name: "Jose",
      gender: "male",
      age: 21
    };
    const personSearch = await People.findOne();
    const response = await request(app)
      .put(`/people/${personSearch.id}`)
      .send(person);

    expect(response.status).toBe(200);
  });

  it("do not should update a person with invalid id", async () => {
    const person = {
      name: "Jose",
      gender: "male",
      age: 21
    };
    const response = await request(app)
      .put(`/people/${-1}`)
      .send(person);

    expect(response.status).toBe(404);
  });

  it("should delete a person", async () => {
    const person = await People.findOne();
    const response = await request(app).delete(`/people/${person.id}`);
    expect(response.status).toBe(200);
  });

  it("do not should delete a person with invalid id", async () => {
    const person = await People.findOne();
    const response = await request(app).delete(`/people/${-1}`);
    expect(response.status).toBe(404);
  });
});
