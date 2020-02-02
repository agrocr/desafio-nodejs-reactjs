## **Store Person**

Delete a single person on database.

- **URL**

  /people/:id

- **Method:**

  `DELETE`

- **URL Params**
  **Required:**

  `id=[integer]`

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    `{ message: "Person Deleted" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Something went wrong, maybe you type an invalid id." }`

- **Sample Call:**

  ```
  $.ajax({
    url: "/people/id",
    dataType: "json",
    type : "DELETE",
    success : function(r) {
      console.log(r);
    }
  });
  ```
