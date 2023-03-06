<div class="modal  fade" id="confirm_bugnote" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <p id="bugnote_modal_confirm_message">
                </p>
            </div>
            <div class="modal-footer">
                <button id="public_issue_send_bugnote" type="button" class="btn btn-warning btn-sm confirm_bugnote" value="public-issue" data-dismiss="modal">
                    <?php echo lang_get('plugin_modal_issue_to_public_button'); ?>
                </button>
                <button id="send_bugnote" type="button" class="btn btn-primary btn-sm confirm_bugnote" value="send-bugnote" data-dismiss="modal">
                    <?php echo lang_get('plugin_modal_add_bugnote_button'); ?>
                </button><br><br>
                <button id="close_bugnote_congirm_modal" type="button" class="btn btn-danger btn-xs m-2" data-dismiss="modal">
                    <i class="fa fa-close" style="font-size:26px"></i>
                </button>
            </div>
        </div>
    </div>
</div>