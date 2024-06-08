<template>
    <div>
        <h1>Student List
        <button type="button" class="btncreate" @click="openModal">Create Student</button>    </h1>
      <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Father Name</th>
          <th>Grand Father Name</th>
          <th>Sur Name</th>
          <th>Gender</th>
          <th>National ID</th>
          <th>Birth Date</th>
          <th>Join Date</th>
          <th>Blood Type</th>
          <th>Username</th>
          <th>Email</th>
          <th>Region ID</th>
          <th>Address</th>
          <th>Parent Phone</th>
          <th>Parent Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="student.studentId">
          <td>{{ index + 1 }}</td>
          <td>{{ student.firstName }}</td>
          <td>{{ student.fatherName }}</td>
          <td>{{ student.grandFatherName }}</td>
          <td>{{ student.surName }}</td>
          <td>{{ student.gender === '1' ? 'Male' : 'Female' }}</td>
          <td>{{ student.nationalId }}</td>
          <td>{{ student.birthDate }}</td>
          <td>{{ student.joinDate }}</td>
          <td>{{ student.bloodType }}</td>
          <td>{{ student.username }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.regionId }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.parentPhone }}</td>
          <td>{{ student.parentEmail }}</td>
          <td>
            <button type="button" class="btn1 btn-primary1" @click="editStudent(student.studentId)">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="btn1 btn-danger1" @click="deleteStudent(student.studentId)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
     <!-- Modal -->
     <Modal :show-modal="showModal" @hide-modal="showModal = false" @save-changes-event="saveStudent" :modal-title="modalTitle">
      <template v-slot:header>
        <h3>{{ modalTitle }}</h3>
      </template>
      <template v-slot:body>
        <form @submit.prevent="saveStudent">
          <!-- Photo -->
          <div class="form-group">
            <label for="photo">Photo</label>
            <input type="text" class="form-control" id="photo" v-model="student.photo" required>
          </div>
          <!-- Name -->
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="student.firstName" required>
          </div>
          <!-- Father Name -->
          <div class="form-group">
            <label for="fatherName">Father Name</label>
            <input type="text" class="form-control" id="fatherName" v-model="student.fatherName" required>
          </div>
          <!-- Grand Father Name -->
          <div class="form-group">
            <label for="grandFatherName">Grand Father Name</label>
            <input type="text" class="form-control" id="grandFatherName" v-model="student.grandFatherName" required>
          </div>
          <!-- Sur Name -->
          <div class="form-group">
            <label for="surName">Sur Name</label>
            <input type="text" class="form-control" id="surName" v-model="student.surName" required>
          </div>
          <!-- Gender -->
          <div class="form-group">
            <label for="gender">Gender</label>
            <select class="form-control" id="gender" v-model="student.gender" required>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <!-- National ID -->
          <div class="form-group">
            <label for="nationalId">National ID</label>
            <input type="text" class="form-control" id="nationalId" v-model="student.nationalId" required>
          </div>
          <!-- Birth Date -->
          <div class="form-group">
            <label for="birthDate">Birth Date</label>
            <input type="date" class="form-control" id="birthDate" v-model="student.birthDate" required>
          </div>
          <!-- Join Date -->
          <div class="form-group">
            <label for="joinDate">Join Date</label>
            <input type="date" class="form-control" id="joinDate" v-model="student.joinDate" required>
          </div>
          <!-- Blood Type -->
          <div class="form-group">
            <label for="bloodType">Blood Type</label>
            <input type="text" class="form-control" id="bloodType" v-model="student.bloodType" required>
          </div>
          <!-- yearClass ID -->
          <div class="form-group">
            <label for="yearClass">yearClass ID</label>
            <input type="number" class="form-control" id="yearClassID" v-model="student.yearClassID" required>
          </div>
          <!-- Username -->
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="student.username" required>
          </div>
          <!-- Email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="student.email" required>
          </div>
          <!-- Password -->
          <div class="form-group">
            <label for="pass">Password</label>
            <input type="password" class="form-control" id="pass" v-model="student.password" required>
          </div>
          <!-- Region ID -->
          <div class="form-group">
            <label for="regionId">Region ID</label>
            <input type="number" class="form-control" id="regionId" v-model="student.regionId" required>
          </div>
          <!-- Address -->
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" v-model="student.address" required>
          </div>
          <!-- Parent Name -->
          <div class="form-group">
            <label for="parentName">Parent Name</label>
            <input type="text" class="form-control" id="parentName" v-model="student.parentName" required>
          </div>
          <!-- Parent Phone -->
          <div class="form-group">
            <label for="parentPhone">Parent Phone</label>
            <input type="text" class="form-control" id="parentPhone" v-model="student.parentPhone" required>
          </div>
          <!-- Parent Email -->
          <div class="form-group">
            <label for="parentEmail">Parent Email</label>
            <input type="email" class="form-control" id="parentEmail" v-model="student.parentEmail" required>
          </div>
        </form>
      </template>
    </modal>
  </div>
</template>  
<script>
import axios from 'axios';
import Modal from '../components/Modal.vue'; // Adjust the path as per your project structure

export default {
  name: 'Students',
  components: {
    Modal,
  },
  data() {
    return {
      students: [],
      page: 1,
      pageSize: 10,
      showModal: false,
      modalTitle: '',
      student: {
        photo: '',
        firstName: '',
        fahterName: '',
        grandFatherName: '',
        surName: '',
        gender: '',
        nationalId: '',
        birthDate: '',
        joinDate: '',
        bloodType: '',
        yearClassID: '',
        username: '',
        email: '',
        password: '',
        regionId: '',
        address: '',
        parentName: '',
        parentPhone: '',
        parentEmail: ''
      }
    }
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios.get(`https://localhost:7090/Api/Admin/Students?page=${this.page}&pageSize=${this.pageSize}`)
        .then(response => {
          this.students = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    openModal() {
      this.modalTitle = 'Create Student';
      this.showModal = true;
      this.clearStudent();
    },
    editStudent(studentId) {
      this.modalTitle = 'Edit Student';
      axios.get(`https://localhost:7090/Api/Admin/Students/${studentId}`)
        .then(response => {
          this.student = response.data;
          this.showModal = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    saveStudent() {
      if (this.student.studentId) {
        // Update existing student
        axios.put(`https://localhost:7090/Api/Admin/Students/${this.student.studentId}`, this.student)
          .then(response => {
            // Handle success
            this.getStudents(); // Refresh student list
            this.showModal = false; // Close modal
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        // Create new student
        axios.post(`https://localhost:7090/Api/Admin/Students`, this.student)
          .then(response => {
            // Handle success
            this.getStudents(); // Refresh student list
            this.showModal = false; // Close modal
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    deleteStudent(studentId) {
      axios.delete(`https://localhost:7090/Api/Admin/Students/${studentId}`)
        .then(response => {
          // Handle success
          this.getStudents(); // Refresh student list
        })
        .catch(error => {
          console.error(error);
        });
    },
    clearStudent() {
      this.student = {
        photo: '',
        firstName: '',
        fatherName: '',
        grandFatherName: '',
        surName: '',
        gender: '',
        nationalId: '',
        birthDate: '',
        joinDate: '',
        bloodType: '',
        yearClassID: '',
        username: '',
        email: '',
        password: '',
        regionId: '',
        address: '',
        parentName: '',
        parentPhone: '',
        parentEmail: ''
      };
    }
  }
}
</script>


<style scoped>
  .container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .table-striped {
    border-radius: 10px;
  }

  .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }

  .modal {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .modal-header, .modal-footer {
    border-color: #ddd;
  }

  .modal-body {
    padding: 20px;
  }

  .form-control {
    border-radius: 5px;
    padding: 10px;
  }

  .form-control:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .btn1 {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.btn-primary1 {
  color: #337ab7;
}

.btn-danger1 {
  color: #e455f6;
}

.fas {
  font-size: 16px;
}
.btncreate {
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
.pagination{
    margin-left: 43%;
}
</style>