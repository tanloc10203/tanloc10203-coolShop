import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useCallback, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Col, Container, Input, Row } from 'reactstrap';

function Markdown(props) {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  const onEditorStateChange = useCallback((editorState) => {
    let unmounted = false;
    !unmounted && setEditorState(editorState);
    return () => (unmounted = true);
  }, []);
  console.log('check data', draftToHtml(convertToRaw(editorState.getCurrentContent())));

  return (
    <Container fluid className="px-3">
      <Row>
        <Col className="p-0">
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
