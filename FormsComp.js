import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import EditorComp from "./EditorComp";
import JoditEditor, { Jodit } from "jodit-react";
// import imgto64 from "image-to-base64"

function FormsComp() {
  const [Data, setData] = useState({
    author: "",
    title: "",
    description: "",
    category: "",
    tags: "",
    keywords: "",
    images: "",
  });
  //   console.log(Data.title)
  let note, value;
  const handleInput = (e) => {
    note = e.target.name;
    value = e.target.value;
    setData({ ...Data, [note]: value });
  };
  
    const [file, setFile] = useState();
   
    const imgsubmit = (e)=> {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));}

  const { author, title, description,  category, tags, keywords } = Data;
  const images = file;
  
  console.log(images);
  console.log(Data);
  const addar = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:80/postarticle", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
      },

      body: JSON.stringify({
        author,
        title,
        description,
        images,
        content,
        category,
        tags,
        keywords,
      }),
    });
    const json = await res.json();

    console.log(json);
  };

   
 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Uploaded");
  };
  const editor = useRef(null);
  const [Content, setContent] = useState("");
  var content = Content;
  // var images = postImage;
  console.log(images);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="filename">
              <Form.Label>
                File Name <span>(English)*</span>:
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter file name"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="submitby">
              <Form.Label>
                Submitted By <span>*</span>:
              </Form.Label>
              <Form.Select
                required
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option default>Select Provider Name</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="reportedby">
              <Form.Label>Reported By:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reported by"
                name="author"
                value={Data.author}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="Place">
              <Form.Label>
                Place <span>*</span>:
              </Form.Label>
              <Form.Control required type="text" placeholder="Reported by" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="Hometitle">
            <Form.Label>
              Home Title <span>*</span>:
            </Form.Label>
            <Form.Control required type="text" placeholder="Enter Home Title" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="Mobiletitle">
            <Form.Label>
              Mobile Title <span>(+ UC Browser : 70 Characters)*</span>:
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Mobile Title"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="Articletitle">
            <Form.Label>
              Article Title <span>*</span>:
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Article Title"
              name="title"
              value={Data.title}
              onChange={handleInput}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="Articletitle">
            <Form.Label>
              description <span>*</span>:
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter description"
              name="description"
              value={Data.description}
              onChange={handleInput}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="Metatitle">
            <Form.Label>
              Meta Title <span>(Hindi + English)*</span>:
            </Form.Label>
            <Form.Control required type="text" placeholder="Enter Meta Title" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="topicpagekey">
            <Form.Label>
              Topic Page Keywords{" "}
              <span>(Only English, Hindi, Alpha-numeric)*</span>:
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Tags"
              name="tags"
              value={Data.tags}
              onChange={handleInput}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="metakey">
            <Form.Label>
              Meta Keywords <span>(5-10 Keywords in English)*</span>:
            </Form.Label>
            <Form.Control
              required
              as="textarea"
              row={3}
              placeholder="Enter Meta Keywords"
              name="keywords"
              value={Data.keywords}
              onChange={handleInput}
            />
          </Form.Group>
        </Row>

        <Row>
          <Col>
            {/* <Form.Group className="mb-3" controlId='filekey'  encType="multipart/form-data">
                        <Form.Label>Images <span>(w x h: 1280x720)*</span>:</Form.Label>
                        <Form.Control required type='file' multiple accept=".png,.jpg,.jpeg,.webp" width={1280} height={720} 
                           name="images" value={Data.images} onChange={imgsubmit} encType="multipart/form-data" />
                    </Form.Group> */}
            {/* <form
              action="/fileupload"
              enctype="multipart/form-data"
              method="POST"
            > */}
              <input type="file" name="image"  onChange={imgsubmit} accept=".png,.jpg,.jpeg,.webp" width={1280} height={720}/>
              <img src={file} width={120} height={120} />
              
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="imgaltkey">
              <Form.Label>
                Image Alt Tag <span>*</span>:
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Image Alt Tag"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="imgcapkey">
              <Form.Label>
                Image Caption <span>*</span>:
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Image Caption"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="vidpathkey">
              <Form.Label>
                Video Path <span>*</span>:
              </Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="photocrekey">
              <Form.Label>
                Photo Credit <span>*</span>:
              </Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="catkey">
            <Form.Label>
              Category: <span>*</span>:
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="category"
              value={Data.category}
              onChange={handleInput}
            />
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Form.Label>
              Type <span>*</span>:
            </Form.Label>
          </Col>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Article"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />

              <Form.Check
                inline
                label="Photo Feature"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />

              <Form.Check
                inline
                label="Live Blog"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />

              <Form.Check
                inline
                label="Listicle Article"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>

        <Row>
          {/* <EditorComp/> */}
          <div>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="editorkey">
                  <Form.Label>
                    <b>Write your article here:</b>
                  </Form.Label>
                  <JoditEditor
                    ref={editor}
                    value={Content}
                    onChange={(newContent) => setContent(newContent)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Row>

        <div className="text-center">
          <Button
            as="input"
            type="submit"
            value="Submit"
            size="lg"
            variant="success"
            onClick={addar}
          />
        </div>
      </Container>
    </div>
  );
}

export default FormsComp;
