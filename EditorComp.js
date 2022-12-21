import React from 'react'
import { useState, useRef } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import JoditEditor from 'jodit-react';

function EditorComp() {
    const editor = useRef(null)
    const [content,setContent] = useState('')

  return (
    <div>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId='editorkey'>
                        <Form.Label><b>Write your article here:</b></Form.Label>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={newContent => setContent(newContent)}
                        />
                    </Form.Group>
                </Col>
            </Row>
    </div>
  )
}

export default EditorComp;