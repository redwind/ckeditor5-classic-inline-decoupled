/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';
import { DecoupledEditor as DecoupledEditorBase } from '@ckeditor/ckeditor5-editor-decoupled';
declare class ClassicEditor extends ClassicEditorBase {
}
declare class InlineEditor extends InlineEditorBase {
}
declare class DecoupledEditor extends DecoupledEditorBase {
}
declare const _default: {
    ClassicEditor: typeof ClassicEditor;
    InlineEditor: typeof InlineEditor;
    DecoupledEditor: typeof DecoupledEditor;
};
export default _default;
