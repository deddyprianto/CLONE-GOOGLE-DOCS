import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { useRouter } from "next/router";
import db from "../../firebase";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  { ssr: false }
);
const TextEditor = () => {
  const [session] = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [editorstate, setEditorstate] = useState(EditorState.createEmpty());
  useEffect(() => {
    if (snapshot)
      return () => {
        cleanup;
      };
  }, []);
  const oneditorStateChange = (editorState) => {
    setEditorstate(editorState);
    db.collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        { merge: true }
      );
  };
  const [session] = useDocumentOnce(
    db
      .collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .doc(id)
  );
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16 ">
      <Editor
        editorState={editorstate}
        onEditorStateChange={oneditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shodow-lg max-w-5xl mx-auto mb-12 border"
      />
    </div>
  );
};

export default TextEditor;
