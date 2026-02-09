import React from "react";

interface PostProps {
  name: string;
  handle: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  profileLink?: string;
  actionIcon?: React.ReactNode; // optional action icon like your SVG
}

const Post: React.FC<PostProps> = ({
  name,
  handle,
  avatarUrl,
  content,
  timestamp,
  profileLink = "#",
  actionIcon,
}) => {
  return (
    <div className="max-w-lg w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <a
            href={profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={avatarUrl}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
          </a>
          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-1">
              <a
                href={profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 hover:underline truncate"
              >
                {name}
              </a>
            </div>
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:underline"
            >
              @{handle}
            </a>
          </div>
        </div>
        {actionIcon && (
          <div className="flex-shrink-0 text-blue-400 hover:text-blue-600 transition-colors">
            {actionIcon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mb-3">
        <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      </div>

      {/* Timestamp */}
      <div className="text-gray-500 text-xs">{timestamp}</div>
    </div>
  );
};

export default Post;
