import React from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import NestedList from '@editorjs/nested-list';
import Table from '@editorjs/table'
import AttachesTool from '@editorjs/attaches';
import Underline from '@editorjs/underline';
import Paragraph from '@editorjs/paragraph';
import InlineCode from '@editorjs/inline-code';
import CodeTool from '@editorjs/code';
import Embed from '@editorjs/embed';
import TextVariantTune from '@editorjs/text-variant-tune';
import LinkTool from '@editorjs/link';
import Delimiter from '@editorjs/delimiter';
import Quote from '@editorjs/quote';
import Checklist from '@editorjs/checklist'
import Warning from '@editorjs/warning';
import Marker from '@editorjs/marker';
import RawTool from '@editorjs/raw';
import SimpleImage from "@editorjs/simple-image";
import NftTool from '@editorjs/nft';
import Translate from '@editorjs/translate-inline';

export default function EditorContext() {
    const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link']
            },
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: 'http://localhost:5175/uploadFile', // Your backend file uploader endpoint
                        byUrl: 'http://localhost:5175/fetchUrl', // Your endpoint that provides uploading by Url
                    }
                }
            },
            list: {
                class: NestedList,
                inlineToolbar: true,
                config: {
                    defaultStyle: 'unordered'
                },
            },
            table: {
                class: Table,
                inlineToolbar: true,
                config: {
                    rows: 2,
                    cols: 3,
                },
            },
            attaches: {
                class: AttachesTool,
                config: {
                    endpoint: 'http://localhost:5175'
                }
            },
            underline: Underline,
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            },
            inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+M',
            },
            code: CodeTool,
            embed: Embed,
            textVariant: TextVariantTune,
            linkTool: {
                class: LinkTool,
                config: {
                    endpoint: 'http://localhost:5175/fetchUrl', // Your backend endpoint for url data fetching,
                }
            },
            delimiter: Delimiter,
            quote: {
                class: Quote,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+O',
                config: {
                    quotePlaceholder: 'Enter a quote',
                    captionPlaceholder: 'Quote\'s author',
                },
            },
            checklist: {
                class: Checklist,
                inlineToolbar: true,
            },
            warning: {
                class: Warning,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+W',
                config: {
                    titlePlaceholder: 'Title',
                    messagePlaceholder: 'Message',
                },
            },
            Marker: {
                class: Marker,
                shortcut: 'CMD+SHIFT+M',
            },
            raw: RawTool,
            image: {
                class: SimpleImage,
                inlineToolbar: true,
                config: {
                    placeholder: 'Paste image URL'
                }
            },
            nft: {
                class: NftTool,
                config: {
                    endpoint: 'http://localhost:5175/alchemy',
                }
            },
            translator: {
                class: Translate,
                config: {
                    endpoint: 'http://localhost:5000/translate?text=',
                }
            },
        },
        tunes: ['textVariant'],
    });
    return (
        <div id='editorjs' className='w-full min-h-[200px] border-red-600 '></div>
    )
}
