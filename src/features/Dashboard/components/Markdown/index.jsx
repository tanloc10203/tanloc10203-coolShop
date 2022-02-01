import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Col, Container, Input, Row } from 'reactstrap';

function Markdown(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  console.log('check data', draftToHtml(convertToRaw(editorState.getCurrentContent())));

  return (
    <Container>
      <Row>
        <Col>
          <main className="main-markdown">
            <Editor
              editorState={editorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onEditorStateChange={onEditorStateChange}
            />

            <Input
              name="text"
              type="textarea"
              disabled
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              rows={14}
              cols={50}
            />
          </main>
        </Col>
      </Row>
    </Container>
  );
}

Markdown.propTypes = {};

export default Markdown;
