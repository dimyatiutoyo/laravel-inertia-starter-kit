import type { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import type { ActualFileObject, FilePondFile } from "filepond";
import type { FilePondInitialFile } from "filepond";
import { useEffect, useState } from "react";
import * as FilePondBase from "filepond";
import { FilePond, type FilePondProps } from "react-filepond";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

FilePondBase.registerPlugin(FilePondPluginImageCrop);
FilePondBase.registerPlugin(FilePondPluginImageResize);
FilePondBase.registerPlugin(FilePondPluginImagePreview);

interface FileUploadProps extends FilePondProps {
	files: FilePondInitialFile[];
	setFiles: (files: FilePondInitialFile[]) => void;
	onUpdateFiles: (fileItems: FilePondFile[]) => void;
}

function FileUpload({
	files,
	setFiles,
	name,
	onUpdateFiles,
	acceptedFileTypes,
	allowImagePreview = true,
	allowMultiple = false,
	allowImageResize = false,
	allowImageCrop = false,
	...rest
}: FileUploadProps) {
	return (
		<FilePond
			name={name}
			files={files as FilePondInitialFile[]}
			allowImageCrop={allowImageCrop}
			allowImageResize={allowImageResize}
			allowImagePreview={allowImagePreview}
			// imageCropAspectRatio="1:1"
			// stylePanelLayout="compact circle"
			// styleLoadIndicatorPosition="center bottom"
			// styleProgressIndicatorPosition="right bottom"
			// styleButtonRemoveItemPosition="left bottom"
			// styleButtonProcessItemPosition="right bottom"
			onupdatefiles={onUpdateFiles}
			allowMultiple={allowMultiple}
			acceptedFileTypes={acceptedFileTypes}
			{...rest}
		/>
	);
}

export default FileUpload;
