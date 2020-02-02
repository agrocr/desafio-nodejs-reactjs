## **Show Person**

Return json data about a single person.

- **URL**

  /people/:id

- **Method:**

  `GET`

- **URL Params**
  **Required:**

  `id=[integer]`

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{ id : 12, name: "Ana", gender: "female", age: 24 }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Something went wrong, maybe you type an invalid id." }`

- **Sample Call:**

  ```
  $.ajax({
    url: "/people/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```
