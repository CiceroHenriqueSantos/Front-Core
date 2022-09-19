import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../components/confirmation-dialog/confirmation-dialog.component";

export interface ConfirmDialogData {
    messages: string[];
    message: string ;
    title?: string | undefined;
    buttonConfirm?: string | undefined;
    callback?: () => void
}

@Injectable()
export class DialogService {

    constructor(public dialog: MatDialog) { }

    openConfirmationDialog(props: any, callback: any): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '353px',
            data: props
        });

        dialogRef.afterClosed().subscribe((isExclusion: boolean) => {
            if (callback)
                callback.result(isExclusion);
        });
    }
}