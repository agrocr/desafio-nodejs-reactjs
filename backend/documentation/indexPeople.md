## **Show Person**

Return json data about all people saved.

- **URL**

  /people

- **Method:**

  `GET`

- **URL Params**
  **Required:**

  None

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `[{ id : 12, name: "Ana", gender: "female", age: 24 }, { id : 12, name: "Maria", gender: "female", age: 23 }]`

- **Error Response:**

  None

- **Sample Call:**

  ```
  $.ajax({
    url: "/people",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```
