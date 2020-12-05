import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"

function Mod({ text }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button className="btn border-0" onClick={handleShow}>
        {text}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jasey Order list form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="modal-dialog" role="document">
            <div class="col-12">
              <form action="">
                <h5>Order details</h5>
                <div class="form-row">
                  <div class="col form-group">
                    <input
                      type="text"
                      name="Product"
                      class="form-control"
                      id="name"
                      placeholder="Product "
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="col form-group">
                    <input
                      type="tel"
                      class="form-control"
                      name="Quantity"
                      id="email"
                      placeholder="Quantity"
                      data-rule="phone"
                      data-msg="Please enter a valid quality"
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <h5>Customer contact details</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="Phone"
                    id="subject"
                    placeholder="Phone Number"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 10 chars of number"
                  />
                  <div class="validate"></div>
                </div>
                <div class=" form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="Email"
                    id="email"
                    placeholder="Email"
                    data-rule="phone"
                    data-msg="Please enter a valid email"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="location"
                    rows="5"
                    data-rule="required"
                    data-msg="Please indicate your location"
                    placeholder="Location"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <h5>Allocated Sales Rep</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="Phone"
                    id="subject"
                    placeholder="Phone Number"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 10 chars of number"
                  />
                  <div class="validate"></div>
                </div>
                <div class=" form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="Email"
                    id="email"
                    placeholder="Email"
                    data-rule="phone"
                    data-msg="Please enter a valid email"
                  />
                  <div class="validate"></div>
                </div>
                <div class="mb-3"></div>
                <div class="text-center">
                  <button class="btn btn-success" type="submit">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} class="btn btn-secondary">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Mod
