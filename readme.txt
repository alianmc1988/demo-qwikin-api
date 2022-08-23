Mock for testing integration of Twilio with your application. It is a simple wrapper around the Twilio API that allows you to test your application without actually sending any kind of messages.

## Geting Started
run `npm install` to install dependencies of the project.
run `npm test` to run the tests.
run `npm start` to start the server.
run `npm run dev` to start the server in development mode.


## Usage
The server exposes different endpoints  with the following functionalities:
=========================

## CONDO
### GET /qwikindemo/condo
This endpoint returns a list of all the condos in the database.

### GET /qwikindemo/condo/:id
This endpoint returns a specific condo with the given id.

### POST /qwikindemo/condo
This endpoint creates a new condo in the database.

#request:
params:{
    authorizationLevel: string,
}
body:{
    name: string,
}

#response:
{
    id: string,
    name: string,
}

### PUT /qwikindemo/condo/:id
This endpoint updates a specific condo with the given id.
#request:
params:{
    authorizationLevel: string,
    id: string,
}
body:{
    condo: Object,
}

#response:
{
    id: string,
    name: string,
}

### DELETE /qwikindemo/condo/:id
This endpoint deletes a specific condo with the given id.
#request:
params:{
    authorizationLevel: string,
    id: string,
}

#response:
{
    messages: string,
}

=========================
## EVENT
### GET /qwikindemo/event
This endpoint returns a list of all the events in the database.

### GET /qwikindemo/event/:id
This endpoint returns a specific event with the given id.

### POST /qwikindemo/event
This endpoint creates a new event in the database.

### PUT /qwikindemo/event/:id
This endpoint updates a specific event with the given id.

### DELETE /qwikindemo/event/:id
This endpoint deletes a specific event with the given id.

=========================
## CUSTOMER 
### GET /qwikindemo/customer
This endpoint returns a list of all the customers in the database.

### GET /qwikindemo/customer/:id
This endpoint returns a specific customer with the given id.

### POST /qwikindemo/customer
This endpoint creates a new customer in the database.

### PUT /qwikindemo/customer/:id
This endpoint updates a specific customer with the given id.

### DELETE /qwikindemo/customer/:id
This endpoint deletes a specific customer with the given id.

=========================

## GATE 
### GET /qwikindemo/gate
This endpoint returns a list of all the gates in the database.

### GET /qwikindemo/gate/:id
This endpoint returns a specific gate with the given id.

### POST /qwikindemo/gate
This endpoint creates a new gate in the database.

### PUT /qwikindemo/gate/:id
This endpoint updates a specific gate with the given id.

### DELETE /qwikindemo/gate/:id
This endpoint deletes a specific gate with the given id.

=========================

## STAFF 
### GET /qwikindemo/staff
This endpoint returns a list of all the staff in the database.

### GET /qwikindemo/staff/:id
This endpoint returns a specific staff with the given id.

### POST /qwikindemo/staff
This endpoint creates a new staff in the database.

### PUT /qwikindemo/staff/:id
This endpoint updates a specific staff with the given id.

### DELETE /qwikindemo/staff/:id
This endpoint deletes a specific staff with the given id.

=========================

## UNIT 
### GET /qwikindemo/unit
This endpoint returns a list of all the units in the database.

### GET /qwikindemo/unit/:id
This endpoint returns a specific unit with the given id.

### POST /qwikindemo/unit
This endpoint creates a new unit in the database.

### PUT /qwikindemo/unit/:id
This endpoint updates a specific unit with the given id.

### DELETE /qwikindemo/unit/:id
This endpoint deletes a specific unit with the given id.

=========================
