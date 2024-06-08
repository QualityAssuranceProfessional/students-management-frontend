<template>
    <div class="modal" v-if="showModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal header -->
          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title">Modal Title</h5>
              <button type="button" class="close" @click="closeModal">
                <span>&times;</span>
              </button>
            </slot>
          </div>
          
          <!-- Modal body -->
          <div class="modal-body">
            <slot name="body">
              <!-- Default body content -->
            </slot>
          </div>
          
          <!-- Modal footer -->
          <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
              <button type="submit" class="btnsaveChanges" @click="saveChanges">Save changes</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('hide-modal');
      },
      saveChanges() {
        // Handle saving changes
        // You may emit an event here to notify the parent component
        this.$emit('save-changes-event');
        this.closeModal(); // Close the modal after saving changes
      }
    }
  }
  </script>
  
  <style scoped>
  /* Modal styles */
  .modal {
    display: block;
    position: fixed;
    z-index: 1050;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
    margin-left: 410px;
  }
  
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 5px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 10px;
  }
  
  .modal-body {
    padding: 10px 0;
  }
  
  .modal-footer {
    border-top: 1px solid #dee2e6;
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
  .btnsaveChanges {
  width: 150px;
  height: 40px;
  border-radius: 40px;
  outline: none;
  border: none;
  background-color: #e455f6;
  font-size: 15px;
  color: #fff;
text-align: center;
float: right;
margin-right: 99px;
}
  </style>
  