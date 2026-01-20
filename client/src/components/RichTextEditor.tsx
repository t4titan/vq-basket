import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { Bold, Italic, Underline as UnderlineIcon, List, ListOrdered, Image as ImageIcon, Heading1, Heading2, Quote } from 'lucide-react';
import { useEffect } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  editable?: boolean;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="border-b border-border p-2 flex flex-wrap gap-1 bg-muted/30 sticky top-0 z-10 backdrop-blur-sm">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('bold') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Bold"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('italic') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Italic"
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('underline') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Underline"
      >
        <UnderlineIcon className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Heading 1"
      >
        <Heading1 className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Heading 2"
      >
        <Heading2 className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('bulletList') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Bullet List"
      >
        <List className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('orderedList') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Ordered List"
      >
        <ListOrdered className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('blockquote') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
        type="button"
        title="Quote"
      >
        <Quote className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <button
        onClick={addImage}
        className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground"
        type="button"
        title="Add Image"
      >
        <ImageIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export function RichTextEditor({ content, onChange, editable = true }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto my-4 shadow-sm border border-border',
        },
      }),
      Underline,
      Placeholder.configure({
        placeholder: 'Tell your story...',
      }),
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg prose-stone dark:prose-invert max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
  });

  // Sync content if it changes externally
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      // Only set content if it's different to prevent cursor jumping
      // This is a naive check, for production might need a more robust diff
      if (editor.getText() === '' && content === '') return;
      // editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className={`rounded-xl border border-border bg-card shadow-sm overflow-hidden transition-shadow focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary ${!editable ? 'border-none shadow-none bg-transparent' : ''}`}>
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}
