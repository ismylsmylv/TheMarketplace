import React, { useState, useRef } from "react";

type FileItem = {
  id: string;
  file: File;
  progress: number;
  status: "uploading" | "complete" | "error";
  preview?: string;
};

type Props = {};

function FileUpload({}: Props) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const isImageFile = (file: File) => file.type.startsWith("image/");
  const isVideoFile = (file: File) => file.type.startsWith("video/");
  const isAcceptedFile = (file: File) => {
    const acceptedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/webp",
      "video/mp4",
      "video/webm",
      "video/ogg",
      "video/quicktime",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return acceptedTypes.includes(file.type) && file.size <= 10 * 1024 * 1024; // 10MB limit
  };

  const createPreview = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      if (isImageFile(file)) {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(file);
      } else if (isVideoFile(file)) {
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        video.onloadedmetadata = () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          video.currentTime = 1; // Seek to 1 second for thumbnail
        };

        video.onseeked = () => {
          ctx?.drawImage(video, 0, 0);
          resolve(canvas.toDataURL());
        };

        video.src = URL.createObjectURL(file);
      } else {
        resolve("");
      }
    });
  };

  const simulateUpload = (fileItem: FileItem) => {
    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) => {
          if (f.id === fileItem.id) {
            const newProgress = Math.min(f.progress + Math.random() * 30, 100);
            const newStatus = newProgress === 100 ? "complete" : f.status;
            return { ...f, progress: newProgress, status: newStatus };
          }
          return f;
        })
      );
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileItem.id ? { ...f, progress: 100, status: "complete" } : f
        )
      );
    }, 2000 + Math.random() * 3000);
  };

  const handleFiles = async (fileList: FileList) => {
    const newFiles: FileItem[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (isAcceptedFile(file)) {
        const preview = await createPreview(file);
        const fileItem: FileItem = {
          id: generateId(),
          file,
          progress: 0,
          status: "uploading",
          preview,
        };
        newFiles.push(fileItem);
      }
    }

    setFiles((prev) => [...prev, ...newFiles]);
    newFiles.forEach(simulateUpload);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAll = () => {
    setFiles([]);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (file: File) => {
    if (isImageFile(file)) {
      return (
        <svg
          className="h-6 w-6 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    } else if (isVideoFile(file)) {
      return (
        <svg
          className="h-6 w-6 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="h-6 w-6 text-cyan-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    }
  };

  return (
    <div className=" Fileupload group  rounded-lg ">
      <div className="relative overflow-hidden transition-all duration-300">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>
        <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>

        <div className="relative p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold ">Upload Files</h3>
              <p className="text-sm text-slate-400">
                Drag & drop your files here
              </p>
            </div>
            <div className="rounded-lg bg-cyan-500/10 p-2">
              <svg
                className="h-6 w-6 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
          </div>

          <div className="group/dropzone mt-6">
            <div
              className={`relative rounded-xl border-2 border-dashed p-8 transition-colors cursor-pointer ${
                dragActive
                  ? "border-cyan-500/50 bg-cyan-500/10"
                  : "border-slate-700 bg-slate-900/50 group-hover/dropzone:border-cyan-500/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={openFileDialog}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx"
                onChange={handleInputChange}
              />
              <div className="space-y-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-900">
                  <svg
                    className="h-10 w-10 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <p className="text-base font-medium text-white">
                    {dragActive
                      ? "Drop files here"
                      : "Drop your files here or browse"}
                  </p>
                  <p className="text-sm text-slate-400">
                    Support files: Images, Videos, PDF, DOC, DOCX
                  </p>
                  <p className="text-xs text-slate-400">Max file size: 10MB</p>
                </div>
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-6 space-y-4 max-h-60 overflow-y-auto">
              {files.map((fileItem) => (
                <div
                  key={fileItem.id}
                  className="rounded-xl bg-slate-900/50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {fileItem.preview &&
                      (isImageFile(fileItem.file) ||
                        isVideoFile(fileItem.file)) ? (
                        <div className="relative h-12 w-12 rounded-lg overflow-hidden">
                          <img
                            src={fileItem.preview}
                            alt="Preview"
                            className="h-full w-full object-cover"
                          />
                          {isVideoFile(fileItem.file) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <svg
                                className="h-4 w-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          className={`rounded-lg p-2 ${
                            isImageFile(fileItem.file)
                              ? "bg-emerald-500/10"
                              : isVideoFile(fileItem.file)
                              ? "bg-purple-500/10"
                              : "bg-cyan-500/10"
                          }`}
                        >
                          {getFileIcon(fileItem.file)}
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-white truncate max-w-[200px]">
                          {fileItem.file.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {formatFileSize(fileItem.file.size)} •{" "}
                          {fileItem.file.type.split("/")[1].toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {fileItem.status === "uploading" && (
                        <span className="text-sm font-medium text-cyan-500">
                          {Math.round(fileItem.progress)}%
                        </span>
                      )}
                      {fileItem.status === "complete" && (
                        <>
                          <svg
                            className="h-5 w-5 text-emerald-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm font-medium text-emerald-500">
                            Complete
                          </span>
                        </>
                      )}
                      <button
                        onClick={() => removeFile(fileItem.id)}
                        className="text-slate-400 transition-colors hover:text-white"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {fileItem.status === "uploading" && (
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 transition-all duration-300"
                        style={{ width: `${fileItem.progress}%` }}
                      >
                        <div className="h-full w-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              onClick={openFileDialog}
              className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 p-px font-medium text-white shadow-[0_1000px_0_0_hsl(0_0%_100%_/_0%)_inset] transition-colors hover:shadow-[0_1000px_0_0_hsl(0_0%_100%_/_2%)_inset]"
            >
              <span className="relative flex items-center justify-center gap-2 rounded-xl bg-slate-950/50 px-4 py-2 transition-colors group-hover/btn:bg-transparent">
                Upload More
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </span>
            </button>
            <button
              onClick={clearAll}
              disabled={files.length === 0}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default FileUpload;
