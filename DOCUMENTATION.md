# Documentation

I plan to migrate this document into https://www.mkdocs.org/ when I have some free time.
Copied and markdowned from an internal Google Docs

# Routes
Below are the different routers contained within our API.

## APIKey
All APIKey requests must pass through this endpoint.
   
```https://backend.gonzagatours.dev/auth``` 

**Creating an APIKey:**

POST: ```https://backend.gonzagatours.dev/auth/a```

**Updating an APIKey:**

PUT: ```https://backend.gonzagatours.dev/auth/a/:id```

**Deleting an APIKey:**

DELETE: ```https://backend.gonzagatours.dev/auth/a/:id```

**Get APIKey by ID:**

GET: ```https://backend.gonzagatours.dev/auth/a/:id```

**Get all APIKeys:**

GET: ```https://backend.gonzagatours.dev/auth/as```

## Organization
All Organization requests must pass through this endpoint.
   
```https://backend.gonzagatours.dev/api``` 
They also need a valid APIKey

**Creating an Organization:**

POST: ```https://backend.gonzagatours.dev/api/organization```

**Updating an Organization:**

PUT: ```https://backend.gonzagatours.dev/api/organization/:id```

**Deleting an Organization:**

DELETE: ```https://backend.gonzagatours.dev/api/organization/:id```

**Get Organization by ID:**

GET: ```https://backend.gonzagatours.dev/api/organization/:id```

**Get all Organizations:**

GET: ```https://backend.gonzagatours.dev/api/organizations```

## Tours
All Tour requests must pass through this endpoint.
   
```https://backend.gonzagatours.dev/tour``` 
They also need a valid APIKey

**Creating a Tour:**

POST: ```https://backend.gonzagatours.dev/tour```

**Updating a Tour:**

PUT: ```https://backend.gonzagatours.dev/tour/t/:id```

**Deleting a Tour:**

DELETE: ```https://backend.gonzagatours.dev/tour/t/:id```

**Get Tour by ID:**

GET: ```https://backend.gonzagatours.dev/tour/t/:id```

**Get all Tours:**

GET: ```https://backend.gonzagatours.dev/tour/tours```

## Media
All Media requests must pass through this endpoint.
   
```https://backend.gonzagatours.dev/media``` 
They also need a valid APIKey

**Creating a Media:**

POST: ```https://backend.gonzagatours.dev/media```

**Deleting a Media:**

DELETE: ```https://backend.gonzagatours.dev/media/m/:id```

**Get Media by ID:**

GET: ```https://backend.gonzagatours.dev/media/m/:id```

**Get all Media:**

GET: ```https://backend.gonzagatours.dev/media/ms```
