export interface Assignment {
    projectName: string;
    date: string;
    start?: string;
    end?: string;
    allDay?: boolean;
    task?: string;
    projectManagerId?: string;
    notes?: string;
    resourceId: string;
    id: string;
}
