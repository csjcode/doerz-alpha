import React from 'react'
import { VscOpenPreview } from 'react-icons/vsc'

type PreviewMakerzTaskFormProps = {
  data: any
}

const PreviewMakerzTaskForm = ({data}: PreviewMakerzTaskFormProps) => {

  const { title, taskIdName, taskType, description, rewardInDOERZ, draft, ownerGroup, ownerAdmin } = data;

  return (
    <div className="flex flex-col w-2/3 px-2">
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-row text-center">
        <VscOpenPreview size={18} className="text-zinc-500" />
      </div>

      <div className="ml-1 font-medium">Task Preview</div>
      <div className="ml-2 text-xs text-red-500/70">not saved</div>
    </div>
    <div className="mt-4 flex flex-col">
      {title && (
        <div className="flex flex-col text-xl font-bold">
          Title: {title}
        </div>
      )}
      {taskIdName && (
        <div className="text-md flex flex-col font-light">
          taskIdName: {taskIdName}
        </div>
      )}
      {taskType && (
        <div className="text-md flex flex-col font-light">
          taskType: {taskType}
        </div>
      )}
      {description && (
        <div className="text-md flex flex-col font-light">
          description: {description}
        </div>
      )}

      {rewardInDOERZ && (
        <div className="text-md flex flex-col font-light">
          DOERZ rewards:{rewardInDOERZ}
        </div>
      )}
      {draft && (
        <div className="text-md flex flex-col font-light">
          {draft === true ? "DRAFT: Yes" : "DRAFT: No"}
        </div>
      )}
      {ownerGroup && (
        <div className="text-md flex flex-col font-light">
          Group Owner:{ownerGroup}
        </div>
      )}
      {ownerAdmin && (
        <div className="text-md flex flex-col font-light">
          Group Admin:{ownerAdmin}
        </div>
      )}
    </div>
  </div>
  )
}

export default PreviewMakerzTaskForm