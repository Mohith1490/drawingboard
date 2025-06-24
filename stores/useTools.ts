import {create} from 'zustand'

type ToolState = {
    tool:String,
    setTool: (para:String)=>void
}

export const useTool = create<ToolState>((set)=>({
    tool:'pencil',
    setTool:(tool: String) => set(()=>({tool:tool}))
}))

