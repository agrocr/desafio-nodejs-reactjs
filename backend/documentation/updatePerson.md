## **Store Person**

Update a single person on database.

- **URL**

  /people/:id

- **Method:**

  `PUT`

- **URL Params**
  **Required:**

  `id=[integer]`

  **Optional:**

  None

- **Data Params**

  `{ name: "Ana", gender: "female", age: 24 }`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    `{ message: "People updated" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Something went wrong, maybe you type an invalid id." }`

- **Sample Call:**

  ```
  $.ajax({
    url: "/people/id",
    dataType: "json",
    type : "PUT",
    data: {...},
    success : function(r) {
      console.log(r);
    }
  });
  ```
