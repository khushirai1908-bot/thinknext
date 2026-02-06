      // Data Storage with Local Storage
        class ThinkNextSystem {
            constructor() {
                this.loadData();
                this.init();
            }

            loadData() {
                // Load all data from localStorage or initialize with default data
                this.students = JSON.parse(localStorage.getItem('thinknext_students')) || this.getDefaultStudents();
                this.courses = JSON.parse(localStorage.getItem('thinknext_courses')) || this.getDefaultCourses();
                this.attendance = JSON.parse(localStorage.getItem('thinknext_attendance')) || this.getDefaultAttendance();
                this.notifications = JSON.parse(localStorage.getItem('thinknext_notifications')) || this.getDefaultNotifications();
                this.chatGroups = JSON.parse(localStorage.getItem('thinknext_chatGroups')) || this.getDefaultChatGroups();
                this.chatMessages = JSON.parse(localStorage.getItem('thinknext_chatMessages')) || this.getDefaultChatMessages();
                this.events = JSON.parse(localStorage.getItem('thinknext_events')) || this.getDefaultEvents();
            }

            getDefaultStudents() {
                return [
                    { 
                        id: "TN001", 
                        name: "Rahul Sharma", 
                        email: "rahul@example.com", 
                        phone: "9876543210", 
                        course: "Web Development", 
                        joiningDate: "2023-01-15", 
                        status: "Active", 
                        address: "Delhi, India", 
                        notes: "Excellent in frontend development", 
                        avatarColor: "primary" 
                    },
                    { 
                        id: "TN002", 
                        name: "Priya Patel", 
                        email: "priya@example.com", 
                        phone: "9876543211", 
                        course: "Data Science", 
                        joiningDate: "2023-02-20", 
                        status: "Active", 
                        address: "Mumbai, India", 
                        notes: "Strong analytical skills", 
                        avatarColor: "success" 
                    },
                    { 
                        id: "TN003", 
                        name: "Amit Kumar", 
                        email: "amit@example.com", 
                        phone: "9876543212", 
                        course: "Mobile App Development", 
                        joiningDate: "2023-03-10", 
                        status: "Active", 
                        address: "Bangalore, India", 
                        notes: "Experienced in Flutter", 
                        avatarColor: "warning" 
                    },
                    { 
                        id: "TN004", 
                        name: "Sneha Singh", 
                        email: "sneha@example.com", 
                        phone: "9876543213", 
                        course: "Digital Marketing", 
                        joiningDate: "2023-01-25", 
                        status: "Completed", 
                        address: "Chennai, India", 
                        notes: "Completed with distinction", 
                        avatarColor: "danger" 
                    },
                    { 
                        id: "TN005", 
                        name: "Vikram Joshi", 
                        email: "vikram@example.com", 
                        phone: "9876543214", 
                        course: "UI/UX Design", 
                        joiningDate: "2023-04-05", 
                        status: "Active", 
                        address: "Pune, India", 
                        notes: "Creative designer", 
                        avatarColor: "info" 
                    }
                ];
            }

            getDefaultCourses() {
                return [
                    { 
                        id: "C001", 
                        name: "Web Development", 
                        duration: "3 months", 
                        students: 25, 
                        status: "Active", 
                        description: "Full stack web development course", 
                        fee: 15000, 
                        color: "primary" 
                    },
                    { 
                        id: "C002", 
                        name: "Data Science", 
                        duration: "4 months", 
                        students: 18, 
                        status: "Active", 
                        description: "Data analysis and machine learning", 
                        fee: 20000, 
                        color: "success" 
                    },
                    { 
                        id: "C003", 
                        name: "Mobile App Development", 
                        duration: "3 months", 
                        students: 22, 
                        status: "Active", 
                        description: "Android and iOS app development", 
                        fee: 18000, 
                        color: "warning" 
                    },
                    { 
                        id: "C004", 
                        name: "Digital Marketing", 
                        duration: "2 months", 
                        students: 30, 
                        status: "Active", 
                        description: "Online marketing strategies", 
                        fee: 12000, 
                        color: "danger" 
                    },
                    { 
                        id: "C005", 
                        name: "UI/UX Design", 
                        duration: "3 months", 
                        students: 15, 
                        status: "Active", 
                        description: "User interface and experience design", 
                        fee: 16000, 
                        color: "info" 
                    }
                ];
            }

            getDefaultAttendance() {
                return [
                    { 
                        date: this.getTodayDate(), 
                        studentId: "TN001", 
                        name: "Rahul Sharma", 
                        course: "Web Development", 
                        status: "Present", 
                        time: "09:15 AM" 
                    },
                    { 
                        date: this.getTodayDate(), 
                        studentId: "TN002", 
                        name: "Priya Patel", 
                        course: "Data Science", 
                        status: "Present", 
                        time: "09:20 AM" 
                    },
                    { 
                        date: this.getTodayDate(), 
                        studentId: "TN003", 
                        name: "Amit Kumar", 
                        course: "Mobile App Development", 
                        status: "Absent", 
                        time: "N/A" 
                    },
                    { 
                        date: this.getTodayDate(), 
                        studentId: "TN004", 
                        name: "Sneha Singh", 
                        course: "Digital Marketing", 
                        status: "Present", 
                        time: "09:10 AM" 
                    },
                    { 
                        date: this.getTodayDate(), 
                        studentId: "TN005", 
                        name: "Vikram Joshi", 
                        course: "UI/UX Design", 
                        status: "Present", 
                        time: "09:25 AM" 
                    }
                ];
            }

            getDefaultNotifications() {
                return [
                    { 
                        id: 1, 
                        title: "New Student Added", 
                        message: "Rahul Sharma has been added to Web Development course", 
                        time: "2 hours ago", 
                        read: false 
                    },
                    { 
                        id: 2, 
                        title: "Attendance Alert", 
                        message: "Amit Kumar was absent today", 
                        time: "5 hours ago", 
                        read: false 
                    },
                    { 
                        id: 3, 
                        title: "Course Update", 
                        message: "Data Science course curriculum has been updated", 
                        time: "1 day ago", 
                        read: true 
                    }
                ];
            }

            getDefaultChatGroups() {
                return [
                    {
                        id: "G001",
                        name: "Web Development Batch 2023",
                        description: "Group for Web Development students",
                        members: ["TN001"],
                        createdAt: "2023-01-15",
                        unreadCount: 0
                    },
                    {
                        id: "G002",
                        name: "All Students",
                        description: "General group for all students",
                        members: ["TN001", "TN002", "TN003", "TN004", "TN005"],
                        createdAt: "2023-01-01",
                        unreadCount: 3
                    },
                    {
                        id: "G003",
                        name: "Data Science Discussion",
                        description: "Discussion group for Data Science course",
                        members: ["TN002"],
                        createdAt: "2023-02-20",
                        unreadCount: 1
                    }
                ];
            }

            getDefaultChatMessages() {
                return [
                    {
                        id: 1,
                        groupId: "G001",
                        sender: "admin",
                        message: "Welcome to the Web Development group!",
                        timestamp: "2023-01-15T10:30:00",
                        readBy: ["TN001"]
                    },
                    {
                        id: 2,
                        groupId: "G002",
                        sender: "admin",
                        message: "Important announcement: Classes will start at 9 AM tomorrow",
                        timestamp: "2023-06-10T15:45:00",
                        readBy: ["TN001", "TN002"]
                    },
                    {
                        id: 3,
                        groupId: "G002",
                        sender: "TN001",
                        name: "Rahul Sharma",
                        message: "Understood, thank you!",
                        timestamp: "2023-06-10T16:00:00",
                        readBy: ["admin"]
                    },
                    {
                        id: 4,
                        groupId: "G003",
                        sender: "admin",
                        message: "Data Science assignment deadline extended to Friday",
                        timestamp: "2023-06-09T11:20:00",
                        readBy: ["TN002"]
                    }
                ];
            }

            getDefaultEvents() {
                return [
                    { 
                        id: 1, 
                        title: "Web Development Exam", 
                        date: "2023-06-15", 
                        course: "Web Development", 
                        description: "Final examination for Web Development course",
                        type: "exam" 
                    },
                    { 
                        id: 2, 
                        title: "Data Science Project Submission", 
                        date: "2023-06-20", 
                        course: "Data Science", 
                        description: "Last date for project submission",
                        type: "submission" 
                    },
                    { 
                        id: 3, 
                        title: "Parent-Teacher Meeting", 
                        date: "2023-06-25", 
                        course: "All", 
                        description: "Quarterly parent-teacher meeting",
                        type: "meeting" 
                    }
                ];
            }

            saveData() {
                localStorage.setItem('thinknext_students', JSON.stringify(this.students));
                localStorage.setItem('thinknext_courses', JSON.stringify(this.courses));
                localStorage.setItem('thinknext_attendance', JSON.stringify(this.attendance));
                localStorage.setItem('thinknext_notifications', JSON.stringify(this.notifications));
                localStorage.setItem('thinknext_chatGroups', JSON.stringify(this.chatGroups));
                localStorage.setItem('thinknext_chatMessages', JSON.stringify(this.chatMessages));
                localStorage.setItem('thinknext_events', JSON.stringify(this.events));
            }

            getTodayDate() {
                return new Date().toISOString().split('T')[0];
            }

            formatDate(dateString) {
                const date = new Date(dateString);
                return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            }

            formatTime(dateString) {
                const date = new Date(dateString);
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }

            showToast(message, type = 'success') {
                const toastContainer = document.getElementById('toastContainer');
                const toastId = 'toast-' + Date.now();
                
                const toast = document.createElement('div');
                toast.className = `custom-toast mb-3`;
                toast.id = toastId;
                toast.innerHTML = `
                    <div class="toast-body d-flex align-items-center">
                        <i class="bi bi-check-circle-fill text-${type} me-2"></i>
                        <div>${message}</div>
                        <button type="button" class="btn-close ms-auto" onclick="document.getElementById('${toastId}').remove()"></button>
                    </div>
                `;
                
                toastContainer.appendChild(toast);
                
                // Auto remove after 5 seconds
                setTimeout(() => {
                    if (document.getElementById(toastId)) {
                        document.getElementById(toastId).remove();
                    }
                }, 5000);
            }

            showLoading() {
                document.getElementById('loadingSpinner').style.display = 'flex';
            }

            hideLoading() {
                document.getElementById('loadingSpinner').style.display = 'none';
            }

            init() {
                this.updateDateTime();
                this.loadDashboard();
                this.setupEventListeners();
                this.updateStats();
                
                // Update datetime every minute
                setInterval(() => this.updateDateTime(), 60000);
            }

            updateDateTime() {
                const now = new Date();
                const options = { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                };
                document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
                document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            }

            updateStats() {
                // Update student count
                document.getElementById('totalStudents').textContent = this.students.length;
                document.getElementById('studentCount').textContent = this.students.length;
                
                // Update course count
                document.getElementById('activeCourses').textContent = this.courses.length;
                document.getElementById('courseCount').textContent = this.courses.length;
                
                // Calculate attendance rate
                const today = this.getTodayDate();
                const todaysAttendance = this.attendance.filter(a => a.date === today);
                const presentCount = todaysAttendance.filter(a => a.status === 'Present').length;
                const attendanceRate = todaysAttendance.length > 0 ? Math.round((presentCount / todaysAttendance.length) * 100) : 0;
                document.getElementById('attendanceRate').textContent = `${attendanceRate}%`;
                
                // Update notification count
                const unreadNotifications = this.notifications.filter(n => !n.read).length;
                document.getElementById('notificationCount').textContent = unreadNotifications;
                
                // Update message count
                const unreadMessages = this.chatMessages.filter(m => !m.readBy.includes('admin')).length;
                document.getElementById('messageCount').textContent = unreadMessages;
                
                // Update pending tasks
                const pendingTasks = this.students.filter(s => s.status === 'Inactive').length;
                document.getElementById('pendingTasks').textContent = pendingTasks;
            }

            loadDashboard() {
                this.showLoading();
                
                // Load recent students
                this.loadRecentStudents();
                
                // Load today's attendance
                this.loadTodaysAttendance();
                
                // Load all students
                this.loadAllStudents();
                
                // Load courses for filters
                this.loadCourseFilters();
                
                // Load attendance records
                this.loadAttendanceRecords();
                
                // Load course cards
                this.loadCourseCards();
                
                // Load notifications
                this.loadNotifications();
                
                // Load chat groups
                this.loadChatGroups();
                
                // Initialize charts
                this.initCharts();
                
                this.hideLoading();
            }

            loadRecentStudents() {
                const tableBody = document.getElementById('recentStudentsTable');
                tableBody.innerHTML = '';
                
                const recentStudents = [...this.students]
                    .sort((a, b) => new Date(b.joiningDate) - new Date(a.joiningDate))
                    .slice(0, 5);
                
                recentStudents.forEach(student => {
                    const firstName = student.name.split(' ')[0];
                    const lastName = student.name.split(' ')[1] || '';
                    const initials = (firstName[0] + (lastName[0] || '')).toUpperCase();
                    
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>
                            <div class="d-flex align-items-center">
                                <div class="avatar me-2" style="background: var(--gradient-${student.avatarColor});">${initials}</div>
                                <div>
                                    <div class="fw-medium">${student.name}</div>
                                    <div class="text-muted small">${student.id}</div>
                                </div>
                            </div>
                        </td>
                        <td>${student.course}</td>
                        <td>${this.formatDate(student.joiningDate)}</td>
                        <td><span class="status-badge ${student.status.toLowerCase()}-status">${student.status}</span></td>
                    `;
                    tableBody.appendChild(row);
                });
            }

            loadTodaysAttendance() {
                const tableBody = document.getElementById('todaysAttendanceTable');
                tableBody.innerHTML = '';
                
                const today = this.getTodayDate();
                const todaysRecords = this.attendance.filter(record => record.date === today);
                
                if (todaysRecords.length === 0) {
                    const row = document.createElement('tr');
                    row.innerHTML = `<td colspan="4" class="text-center py-4 text-muted">No attendance recorded for today yet.</td>`;
                    tableBody.appendChild(row);
                    return;
                }
                
                todaysRecords.forEach(record => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td class="fw-medium">${record.name}</td>
                        <td>${record.course}</td>
                        <td>${record.time}</td>
                        <td><span class="attendance-badge ${record.status.toLowerCase()}">${record.status}</span></td>
                    `;
                    tableBody.appendChild(row);
                });
            }

            loadAllStudents(page = 1) {
                const tableBody = document.getElementById('allStudentsTable');
                tableBody.innerHTML = '';
                
                // Apply filters
                let filteredStudents = [...this.students];
                const searchTerm = document.getElementById('studentSearch')?.value.toLowerCase() || '';
                const courseFilter = document.getElementById('courseFilter')?.value || '';
                const statusFilter = document.getElementById('statusFilter')?.value || '';
                
                if (searchTerm) {
                    filteredStudents = filteredStudents.filter(student => 
                        student.name.toLowerCase().includes(searchTerm) || 
                        student.email.toLowerCase().includes(searchTerm) ||
                        student.id.toLowerCase().includes(searchTerm)
                    );
                }
                
                if (courseFilter) {
                    filteredStudents = filteredStudents.filter(student => student.course === courseFilter);
                }
                
                if (statusFilter) {
                    filteredStudents = filteredStudents.filter(student => student.status === statusFilter);
                }
                
                // Pagination
                const studentsPerPage = 5;
                const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
                const startIndex = (page - 1) * studentsPerPage;
                const endIndex = Math.min(startIndex + studentsPerPage, filteredStudents.length);
                const paginatedStudents = filteredStudents.slice(startIndex, endIndex);
                
                // Display students
                paginatedStudents.forEach(student => {
                    const firstName = student.name.split(' ')[0];
                    const lastName = student.name.split(' ')[1] || '';
                    const initials = (firstName[0] + (lastName[0] || '')).toUpperCase();
                    
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td class="fw-medium">${student.id}</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <div class="avatar me-2" style="background: var(--gradient-${student.avatarColor});">${initials}</div>
                                <div>
                                    <div class="fw-medium">${student.name}</div>
                                    <div class="text-muted small">${student.email}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>${student.phone}</div>
                            <div class="text-muted small">${student.email}</div>
                        </td>
                        <td>${student.course}</td>
                        <td>${this.formatDate(student.joiningDate)}</td>
                        <td><span class="status-badge ${student.status.toLowerCase()}-status">${student.status}</span></td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-outline-primary edit-student-btn" data-id="${student.id}">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn btn-outline-danger delete-student-btn" data-id="${student.id}">
                                    <i class="bi bi-trash"></i>
                                </button>
                                <button class="btn btn-outline-info view-student-btn" data-id="${student.id}">
                                    <i class="bi bi-eye"></i>
                                </button>
                            </div>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
                
                // Update pagination
                this.updateStudentPagination(totalPages, page);
            }

            updateStudentPagination(totalPages, currentPage) {
                const paginationContainer = document.getElementById('studentPagination');
                paginationContainer.innerHTML = '';
                
                if (totalPages <= 1) return;
                
                // Previous button
                const prevLi = document.createElement('li');
                prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
                prevLi.innerHTML = `<a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>`;
                paginationContainer.appendChild(prevLi);
                
                // Page numbers
                for (let i = 1; i <= totalPages; i++) {
                    const li = document.createElement('li');
                    li.className = `page-item ${i === currentPage ? 'active' : ''}`;
                    li.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
                    paginationContainer.appendChild(li);
                }
                
                // Next button
                const nextLi = document.createElement('li');
                nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
                nextLi.innerHTML = `<a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>`;
                paginationContainer.appendChild(nextLi);
            }

            loadCourseFilters() {
                const courseSelectors = [
                    'courseFilter',
                    'studentCourse',
                    'attendanceCourseFilter',
                    'notificationCourse',
                    'eventCourse',
                    'editStudentCourse'
                ];
                
                courseSelectors.forEach(selectorId => {
                    const selector = document.getElementById(selectorId);
                    if (selector) {
                        const defaultOption = selector.querySelector('option[value=""]');
                        selector.innerHTML = '';
                        if (defaultOption) selector.appendChild(defaultOption);
                        
                        this.courses.forEach(course => {
                            const option = document.createElement('option');
                            option.value = selectorId.includes('Course') && !selectorId.includes('notification') ? course.name : course.id;
                            option.textContent = course.name;
                            selector.appendChild(option);
                        });
                    }
                });
            }

            loadAttendanceRecords() {
                const tableBody = document.getElementById('attendanceTable');
                tableBody.innerHTML = '';
                
                // Sort by date (newest first)
                const sortedAttendance = [...this.attendance].sort((a, b) => new Date(b.date) - new Date(a.date));
                
                // Get filter values
                const dateFilter = document.getElementById('attendanceDateFilter')?.value;
                const courseFilter = document.getElementById('attendanceCourseFilter')?.value;
                const statusFilter = document.getElementById('attendanceStatusFilter')?.value;
                
                // Apply filters
                let filteredAttendance = sortedAttendance;
                if (dateFilter) {
                    filteredAttendance = filteredAttendance.filter(record => record.date === dateFilter);
                }
                if (courseFilter) {
                    filteredAttendance = filteredAttendance.filter(record => record.course === courseFilter);
                }
                if (statusFilter) {
                    filteredAttendance = filteredAttendance.filter(record => record.status === statusFilter);
                }
                
                // Display records
                if (filteredAttendance.length === 0) {
                    const row = document.createElement('tr');
                    row.innerHTML = `<td colspan="6" class="text-center py-4 text-muted">No attendance records found.</td>`;
                    tableBody.appendChild(row);
                    return;
                }
                
                filteredAttendance.forEach(record => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${this.formatDate(record.date)}</td>
                        <td class="fw-medium">${record.studentId}</td>
                        <td>${record.name}</td>
                        <td>${record.course}</td>
                        <td><span class="attendance-badge ${record.status.toLowerCase()}">${record.status}</span></td>
                        <td>
                            <button class="btn btn-sm btn-outline-warning edit-attendance-btn" 
                                    data-id="${record.studentId}" 
                                    data-date="${record.date}">
                                <i class="bi bi-pencil"></i> Edit
                            </button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            }

            loadCourseCards() {
                const container = document.getElementById('courseCardsContainer');
                container.innerHTML = '';
                
                this.courses.forEach(course => {
                    const studentsInCourse = this.students.filter(s => s.course === course.name && s.status === 'Active').length;
                    const attendanceInCourse = this.attendance.filter(a => a.course === course.name).length;
                    const presentInCourse = this.attendance.filter(a => a.course === course.name && a.status === 'Present').length;
                    const attendanceRate = attendanceInCourse > 0 ? Math.round((presentInCourse / attendanceInCourse) * 100) : 0;
                    
                    const card = document.createElement('div');
                    card.className = 'col-md-6 col-lg-4 mb-4';
                    card.innerHTML = `
                        <div class="card h-100">
                            <div class="card-header" style="background: var(--gradient-${course.color}); color: white;">
                                <h5 class="card-title mb-0">${course.name}</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${course.description || 'No description available.'}</p>
                                <div class="row text-center">
                                    <div class="col-6">
                                        <div class="fw-bold fs-4">${studentsInCourse}</div>
                                        <div class="text-muted small">Students</div>
                                    </div>
                                    <div class="col-6">
                                        <div class="fw-bold fs-4">${attendanceRate}%</div>
                                        <div class="text-muted small">Attendance</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent">
                                <div class="d-flex justify-content-between">
                                    <span class="badge bg-secondary">${course.duration}</span>
                                    <span class="badge" style="background: var(--gradient-${course.color}); color: white;">₹${course.fee}</span>
                                </div>
                            </div>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }

            loadNotifications() {
                const notificationList = document.getElementById('notificationList');
                if (!notificationList) return;
                
                notificationList.innerHTML = '';
                
                this.notifications.slice(0, 10).forEach(notification => {
                    const item = document.createElement('div');
                    item.className = `d-flex p-3 border-bottom ${notification.read ? '' : 'bg-light'}`;
                    item.innerHTML = `
                        <div class="flex-shrink-0">
                            <i class="bi bi-bell-fill text-${notification.read ? 'secondary' : 'primary'} fs-5"></i>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <div class="fw-medium">${notification.title}</div>
                            <div class="small text-muted">${notification.message}</div>
                            <div class="small text-muted mt-1">${notification.time}</div>
                        </div>
                        ${!notification.read ? '<span class="badge bg-primary">New</span>' : ''}
                    `;
                    notificationList.appendChild(item);
                });
            }

            loadChatGroups() {
                const chatSidebar = document.getElementById('chatSidebar');
                if (!chatSidebar) return;
                
                chatSidebar.innerHTML = '';
                
                this.chatGroups.forEach(group => {
                    const groupElement = document.createElement('div');
                    groupElement.className = 'chat-group';
                    groupElement.dataset.groupId = group.id;
                    
                    const groupName = group.name;
                    const initials = groupName.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2);
                    
                    groupElement.innerHTML = `
                        <div class="d-flex align-items-center">
                            <div class="group-avatar me-3">${initials}</div>
                            <div class="flex-grow-1">
                                <div class="fw-medium">${group.name}</div>
                                <div class="text-muted small">${group.members.length} members</div>
                            </div>
                            ${group.unreadCount > 0 ? `<span class="unread-count">${group.unreadCount}</span>` : ''}
                        </div>
                    `;
                    
                    groupElement.addEventListener('click', () => this.openChatGroup(group.id));
                    chatSidebar.appendChild(groupElement);
                });
            }

            openChatGroup(groupId) {
                const group = this.chatGroups.find(g => g.id === groupId);
                if (!group) return;
                
                // Update UI
                document.getElementById('currentGroupName').textContent = group.name;
                document.getElementById('currentGroupMembers').textContent = `${group.members.length} members`;
                document.getElementById('chatInput').style.display = 'block';
                
                // Load messages
                this.loadChatMessages(groupId);
                
                // Mark messages as read
                this.markChatMessagesAsRead(groupId);
                
                // Update active group
                document.querySelectorAll('.chat-group').forEach(el => {
                    el.classList.remove('active');
                });
                document.querySelector(`.chat-group[data-group-id="${groupId}"]`).classList.add('active');
            }

            loadChatMessages(groupId) {
                const chatMessages = document.getElementById('chatMessages');
                const groupMessages = this.chatMessages
                    .filter(m => m.groupId === groupId)
                    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
                
                chatMessages.innerHTML = '';
                
                if (groupMessages.length === 0) {
                    chatMessages.innerHTML = `
                        <div class="text-center py-5">
                            <i class="bi bi-chat-left-text display-4 text-muted"></i>
                            <p class="mt-3 text-muted">No messages yet. Start the conversation!</p>
                        </div>
                    `;
                    return;
                }
                
                groupMessages.forEach(msg => {
                    const messageDiv = document.createElement('div');
                    messageDiv.className = `message ${msg.sender === 'admin' ? 'sent' : 'received'}`;
                    
                    const senderName = msg.sender === 'admin' ? 'You' : (msg.name || 'Student');
                    const time = this.formatTime(msg.timestamp);
                    
                    messageDiv.innerHTML = `
                        <div class="message-content">
                            <div>${msg.message}</div>
                        </div>
                        <div class="message-info">
                            ${senderName} • ${time}
                        </div>
                    `;
                    
                    chatMessages.appendChild(messageDiv);
                });
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            markChatMessagesAsRead(groupId) {
                const group = this.chatGroups.find(g => g.id === groupId);
                if (group) {
                    group.unreadCount = 0;
                }
                
                this.chatMessages.forEach(msg => {
                    if (msg.groupId === groupId && !msg.readBy.includes('admin')) {
                        msg.readBy.push('admin');
                    }
                });
                
                this.saveData();
                this.updateStats();
                this.loadChatGroups();
            }

            sendMessage(groupId, message) {
                if (!message.trim()) return;
                
                const newMessage = {
                    id: this.chatMessages.length + 1,
                    groupId: groupId,
                    sender: 'admin',
                    message: message.trim(),
                    timestamp: new Date().toISOString(),
                    readBy: ['admin']
                };
                
                this.chatMessages.push(newMessage);
                
                // Update unread count for other members
                const group = this.chatGroups.find(g => g.id === groupId);
                if (group) {
                    group.members.forEach(memberId => {
                        if (memberId !== 'admin') {
                            // Find message and add member to readBy if they've read it
                            // In a real app, this would be handled differently
                        }
                    });
                }
                
                this.saveData();
                this.loadChatMessages(groupId);
                
                // Clear input
                document.getElementById('messageInput').value = '';
            }

            initCharts() {
                // Monthly Attendance Chart
                const attendanceCtx = document.getElementById('attendanceChart');
                if (attendanceCtx) {
                    new Chart(attendanceCtx.getContext('2d'), {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Attendance %',
                                data: [85, 78, 90, 88, 92, 89],
                                borderColor: '#6a11cb',
                                backgroundColor: 'rgba(106, 17, 203, 0.1)',
                                borderWidth: 3,
                                fill: true,
                                tension: 0.4
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                        }
                    });
                }

                // Course Distribution Chart
                const courseCtx = document.getElementById('courseChart');
                if (courseCtx) {
                    new Chart(courseCtx.getContext('2d'), {
                        type: 'doughnut',
                        data: {
                            labels: this.courses.map(c => c.name),
                            datasets: [{
                                data: this.courses.map(c => this.students.filter(s => s.course === c.name).length),
                                backgroundColor: [
                                    '#6a11cb', '#00b09b', '#ffa726', '#ff416c', '#3494e6'
                                ]
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }
                    });
                }

                // Growth Chart
                const growthCtx = document.getElementById('growthChart');
                if (growthCtx) {
                    new Chart(growthCtx.getContext('2d'), {
                        type: 'bar',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'New Students',
                                data: [5, 8, 12, 10, 15, this.students.length],
                                backgroundColor: '#00b09b'
                            }]
                        },
                        options: {
                            responsive: true
                        }
                    });
                }

                // Attendance Summary Chart
                const summaryCtx = document.getElementById('attendanceSummaryChart');
                if (summaryCtx) {
                    const presentCount = this.attendance.filter(a => a.status === 'Present').length;
                    const absentCount = this.attendance.filter(a => a.status === 'Absent').length;
                    
                    new Chart(summaryCtx.getContext('2d'), {
                        type: 'pie',
                        data: {
                            labels: ['Present', 'Absent'],
                            datasets: [{
                                data: [presentCount, absentCount],
                                backgroundColor: ['#00b09b', '#ff416c']
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }
                    });
                }
            }

            setupEventListeners() {
                // Navigation
                document.querySelectorAll('[data-view]').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const view = link.getAttribute('data-view');
                        this.showView(view);
                    });
                });

                // Quick Actions
                document.getElementById('markAttendanceBtn')?.addEventListener('click', () => this.openAttendanceModal());
                document.getElementById('exportDataBtn')?.addEventListener('click', () => this.exportData());
                document.getElementById('sendNotificationBtn')?.addEventListener('click', () => {
                    new bootstrap.Modal(document.getElementById('sendNotificationModal')).show();
                });

                // Student Management
                document.getElementById('addStudentForm')?.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.addStudent();
                });

                document.getElementById('studentSearch')?.addEventListener('input', () => this.loadAllStudents(1));
                document.getElementById('courseFilter')?.addEventListener('change', () => this.loadAllStudents(1));
                document.getElementById('statusFilter')?.addEventListener('change', () => this.loadAllStudents(1));
                document.getElementById('resetFilterBtn')?.addEventListener('click', () => {
                    document.getElementById('studentSearch').value = '';
                    document.getElementById('courseFilter').value = '';
                    document.getElementById('statusFilter').value = '';
                    this.loadAllStudents(1);
                });

                // Pagination
                document.getElementById('studentPagination')?.addEventListener('click', (e) => {
                    if (e.target.classList.contains('page-link')) {
                        e.preventDefault();
                        const page = parseInt(e.target.dataset.page);
                        if (!isNaN(page)) {
                            this.loadAllStudents(page);
                        }
                    }
                });

                // Attendance
                document.getElementById('markAttendanceBtn2')?.addEventListener('click', () => this.openAttendanceModal());
                document.getElementById('filterAttendanceBtn')?.addEventListener('click', () => {
                    const filterBox = document.getElementById('attendanceFilter');
                    filterBox.style.display = filterBox.style.display === 'none' ? 'block' : 'none';
                });
                document.getElementById('applyAttendanceFilter')?.addEventListener('click', () => this.loadAttendanceRecords());
                document.getElementById('saveAttendanceBtn')?.addEventListener('click', () => this.saveAttendance());
                document.getElementById('markAllPresentBtn')?.addEventListener('click', () => this.markAllPresent());

                // Courses
                document.getElementById('addCourseBtn')?.addEventListener('click', () => {
                    new bootstrap.Modal(document.getElementById('addCourseModal')).show();
                });
                document.getElementById('saveCourseBtn')?.addEventListener('click', () => this.addCourse());

                // Notifications
                document.getElementById('notificationBtn')?.addEventListener('click', () => {
                    new bootstrap.Modal(document.getElementById('notificationModal')).show();
                });
                document.getElementById('markAllReadBtn')?.addEventListener('click', () => this.markAllNotificationsRead());
                document.getElementById('sendNotificationConfirmBtn')?.addEventListener('click', () => this.sendNotification());
                document.getElementById('notificationRecipient')?.addEventListener('change', (e) => this.toggleNotificationRecipient(e.target.value));

                // Chat
                document.getElementById('createGroupBtn')?.addEventListener('click', () => this.openCreateGroupModal());
                document.getElementById('saveGroupBtn')?.addEventListener('click', () => this.createGroup());
                document.getElementById('sendMessageBtn')?.addEventListener('click', () => {
                    const groupId = document.querySelector('.chat-group.active')?.dataset.groupId;
                    const message = document.getElementById('messageInput').value;
                    if (groupId && message) {
                        this.sendMessage(groupId, message);
                    }
                });
                document.getElementById('messageInput')?.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const groupId = document.querySelector('.chat-group.active')?.dataset.groupId;
                        const message = document.getElementById('messageInput').value;
                        if (groupId && message) {
                            this.sendMessage(groupId, message);
                        }
                    }
                });

                // Events
                document.getElementById('addEventBtn')?.addEventListener('click', () => {
                    new bootstrap.Modal(document.getElementById('addEventModal')).show();
                });
                document.getElementById('saveEventBtn')?.addEventListener('click', () => this.addEvent());

                // Reports
                document.getElementById('printReportBtn')?.addEventListener('click', () => window.print());
                document.getElementById('exportReportBtn')?.addEventListener('click', () => this.exportReport());

                // Edit Student
                document.getElementById('updateStudentBtn')?.addEventListener('click', () => this.updateStudent());

                // Event delegation for dynamic elements
                document.addEventListener('click', (e) => {
                    // Edit student button
                    if (e.target.closest('.edit-student-btn')) {
                        const studentId = e.target.closest('.edit-student-btn').dataset.id;
                        this.openEditStudentModal(studentId);
                    }
                    
                    // Delete student button
                    if (e.target.closest('.delete-student-btn')) {
                        const studentId = e.target.closest('.delete-student-btn').dataset.id;
                        this.deleteStudent(studentId);
                    }
                    
                    // View student button
                    if (e.target.closest('.view-student-btn')) {
                        const studentId = e.target.closest('.view-student-btn').dataset.id;
                        this.viewStudentDetails(studentId);
                    }
                    
                    // Edit attendance button
                    if (e.target.closest('.edit-attendance-btn')) {
                        const button = e.target.closest('.edit-attendance-btn');
                        const studentId = button.dataset.id;
                        const date = button.dataset.date;
                        this.editAttendance(studentId, date);
                    }
                });

                // Initialize date fields
                const today = this.getTodayDate();
                document.getElementById('joiningDate').value = today;
                document.getElementById('attendanceDateFilter').value = today;
                document.getElementById('eventDate').value = today;
            }

            showView(viewName) {
                // Hide all views
                document.querySelectorAll('.view-content').forEach(view => {
                    view.classList.remove('active');
                });
                
                // Show requested view
                const viewElement = document.getElementById(viewName + 'View');
                if (viewElement) {
                    viewElement.classList.add('active');
                }
                
                // Update active nav link
                document.querySelectorAll('.sidebar .nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                const activeLink = document.querySelector(`[data-view="${viewName}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
                
                // Load data for specific views
                switch(viewName) {
                    case 'students':
                        this.loadAllStudents();
                        break;
                    case 'attendance':
                        this.loadAttendanceRecords();
                        break;
                    case 'courses':
                        this.loadCourseCards();
                        break;
                    case 'chat':
                        this.loadChatGroups();
                        break;
                    case 'calendar':
                        this.loadCalendar();
                        break;
                }
            }

            openAttendanceModal() {
                const modal = new bootstrap.Modal(document.getElementById('attendanceModal'));
                const tableBody = document.getElementById('attendanceModalTable');
                tableBody.innerHTML = '';
                
                const today = this.getTodayDate();
                document.getElementById('modalDate').textContent = this.formatDate(today);
                
                const todaysAttendance = this.attendance.filter(record => record.date === today);
                const activeStudents = this.students.filter(student => student.status === 'Active');
                
                activeStudents.forEach(student => {
                    const existingRecord = todaysAttendance.find(record => record.studentId === student.id);
                    
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.course}</td>
                        <td>
                            <select class="form-select form-select-sm attendance-select" data-id="${student.id}">
                                <option value="Present" ${existingRecord && existingRecord.status === 'Present' ? 'selected' : ''}>Present</option>
                                <option value="Absent" ${existingRecord && existingRecord.status === 'Absent' ? 'selected' : ''}>Absent</option>
                            </select>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
                
                modal.show();
            }

            saveAttendance() {
                const today = this.getTodayDate();
                const selects = document.querySelectorAll('.attendance-select');
                
                // Remove existing attendance records for today
                this.attendance = this.attendance.filter(record => record.date !== today);
                
                // Add new records
                selects.forEach(select => {
                    const studentId = select.dataset.id;
                    const student = this.students.find(s => s.id === studentId);
                    
                    if (student) {
                        const status = select.value;
                        const time = status === 'Present' ? new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'N/A';
                        
                        this.attendance.push({
                            date: today,
                            studentId: studentId,
                            name: student.name,
                            course: student.course,
                            status: status,
                            time: time
                        });
                    }
                });
                
                this.saveData();
                this.loadTodaysAttendance();
                this.loadAttendanceRecords();
                this.updateStats();
                
                this.showToast('Attendance saved successfully!');
                bootstrap.Modal.getInstance(document.getElementById('attendanceModal')).hide();
            }

            markAllPresent() {
                const today = this.getTodayDate();
                const activeStudents = this.students.filter(s => s.status === 'Active');
                
                // Remove existing records for today
                this.attendance = this.attendance.filter(record => record.date !== today);
                
                // Mark all as present
                activeStudents.forEach(student => {
                    this.attendance.push({
                        date: today,
                        studentId: student.id,
                        name: student.name,
                        course: student.course,
                        status: 'Present',
                        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    });
                });
                
                this.saveData();
                this.loadTodaysAttendance();
                this.updateStats();
                this.showToast('All students marked as present!');
            }

            addStudent() {
                const name = document.getElementById('studentName').value;
                const email = document.getElementById('studentEmail').value;
                const phone = document.getElementById('studentPhone').value;
                const course = document.getElementById('studentCourse').value;
                const joiningDate = document.getElementById('joiningDate').value;
                const status = document.getElementById('studentStatus').value;
                const address = document.getElementById('studentAddress').value;
                const notes = document.getElementById('studentNotes').value;
                
                // Generate new student ID
                const lastId = this.students.length > 0 ? 
                    parseInt(this.students[this.students.length-1].id.substring(2)) : 0;
                const newId = `TN${(lastId + 1).toString().padStart(3, '0')}`;
                
                // Add student
                const newStudent = {
                    id: newId,
                    name: name,
                    email: email,
                    phone: phone,
                    course: course,
                    joiningDate: joiningDate,
                    status: status,
                    address: address || 'Not specified',
                    notes: notes || '',
                    avatarColor: ['primary', 'success', 'warning', 'danger', 'info', 'secondary'][Math.floor(Math.random() * 6)]
                };
                
                this.students.push(newStudent);
                this.saveData();
                
                // Update UI
                this.loadRecentStudents();
                this.loadAllStudents();
                this.updateStats();
                
                // Add notification
                this.addNotification('New Student Added', `${name} has been added to ${course} course`);
                
                // Reset form
                document.getElementById('addStudentForm').reset();
                document.getElementById('joiningDate').value = this.getTodayDate();
                
                this.showToast(`Student ${name} added successfully with ID: ${newId}`);
                this.showView('students');
            }

            openEditStudentModal(studentId) {
                const student = this.students.find(s => s.id === studentId);
                if (!student) return;
                
                document.getElementById('editStudentId').value = student.id;
                document.getElementById('editStudentName').value = student.name;
                document.getElementById('editStudentEmail').value = student.email;
                document.getElementById('editStudentPhone').value = student.phone;
                document.getElementById('editStudentStatus').value = student.status;
                
                // Load courses for dropdown
                const courseSelect = document.getElementById('editStudentCourse');
                courseSelect.innerHTML = '';
                this.courses.forEach(course => {
                    const option = document.createElement('option');
                    option.value = course.name;
                    option.textContent = course.name;
                    option.selected = course.name === student.course;
                    courseSelect.appendChild(option);
                });
                
                new bootstrap.Modal(document.getElementById('editStudentModal')).show();
            }

            updateStudent() {
                const studentId = document.getElementById('editStudentId').value;
                const studentIndex = this.students.findIndex(s => s.id === studentId);
                
                if (studentIndex === -1) return;
                
                this.students[studentIndex].name = document.getElementById('editStudentName').value;
                this.students[studentIndex].email = document.getElementById('editStudentEmail').value;
                this.students[studentIndex].phone = document.getElementById('editStudentPhone').value;
                this.students[studentIndex].course = document.getElementById('editStudentCourse').value;
                this.students[studentIndex].status = document.getElementById('editStudentStatus').value;
                
                this.saveData();
                this.loadAllStudents();
                this.loadRecentStudents();
                this.updateStats();
                
                this.showToast('Student updated successfully!');
                bootstrap.Modal.getInstance(document.getElementById('editStudentModal')).hide();
            }

            deleteStudent(studentId) {
                if (confirm('Are you sure you want to delete this student?')) {
                    const studentIndex = this.students.findIndex(s => s.id === studentId);
                    if (studentIndex !== -1) {
                        const studentName = this.students[studentIndex].name;
                        this.students.splice(studentIndex, 1);
                        
                        this.saveData();
                        this.loadAllStudents();
                        this.updateStats();
                        
                        this.addNotification('Student Deleted', `${studentName} has been removed from the system`);
                        this.showToast('Student deleted successfully!');
                    }
                }
            }

            viewStudentDetails(studentId) {
                const student = this.students.find(s => s.id === studentId);
                if (student) {
                    alert(`Student Details:\n\nName: ${student.name}\nID: ${student.id}\nEmail: ${student.email}\nPhone: ${student.phone}\nCourse: ${student.course}\nStatus: ${student.status}\nJoining Date: ${this.formatDate(student.joiningDate)}\nAddress: ${student.address}\nNotes: ${student.notes}`);
                }
            }

            editAttendance(studentId, date) {
                const attendanceRecord = this.attendance.find(a => a.studentId === studentId && a.date === date);
                if (attendanceRecord) {
                    const newStatus = prompt(`Edit attendance for ${attendanceRecord.name} on ${this.formatDate(date)}:\nEnter "Present" or "Absent"`, attendanceRecord.status);
                    
                    if (newStatus && ['Present', 'Absent'].includes(newStatus)) {
                        attendanceRecord.status = newStatus;
                        attendanceRecord.time = newStatus === 'Present' ? 
                            new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'N/A';
                        
                        this.saveData();
                        this.loadAttendanceRecords();
                        this.loadTodaysAttendance();
                        this.updateStats();
                        
                        this.showToast('Attendance updated successfully!');
                    }
                }
            }

            addCourse() {
                const name = document.getElementById('courseName').value;
                const duration = document.getElementById('courseDuration').value;
                const description = document.getElementById('courseDescription').value;
                const fee = document.getElementById('courseFee').value;
                
                if (!name || !duration) {
                    alert('Please fill in required fields');
                    return;
                }
                
                const lastId = this.courses.length > 0 ? 
                    parseInt(this.courses[this.courses.length-1].id.substring(1)) : 0;
                const newId = `C${(lastId + 1).toString().padStart(3, '0')}`;
                
                this.courses.push({
                    id: newId,
                    name: name,
                    duration: duration,
                    students: 0,
                    status: "Active",
                    description: description,
                    fee: fee || 0,
                    color: ['primary', 'success', 'warning', 'danger', 'info'][this.courses.length % 5]
                });
                
                this.saveData();
                this.loadCourseCards();
                this.loadCourseFilters();
                this.updateStats();
                
                bootstrap.Modal.getInstance(document.getElementById('addCourseModal')).hide();
                document.getElementById('addCourseForm').reset();
                
                this.showToast(`Course "${name}" added successfully!`);
            }

            addNotification(title, message) {
                const newNotification = {
                    id: this.notifications.length + 1,
                    title: title,
                    message: message,
                    time: 'Just now',
                    read: false
                };
                
                this.notifications.unshift(newNotification);
                this.saveData();
                this.updateStats();
                this.loadNotifications();
            }

            markAllNotificationsRead() {
                this.notifications.forEach(notification => {
                    notification.read = true;
                });
                
                this.saveData();
                this.updateStats();
                this.loadNotifications();
                
                this.showToast('All notifications marked as read');
            }

            toggleNotificationRecipient(recipientType) {
                document.getElementById('courseSelectContainer').style.display = 
                    recipientType === 'course' ? 'block' : 'none';
                document.getElementById('studentSelectContainer').style.display = 
                    recipientType === 'student' ? 'block' : 'none';
                
                // Load students for dropdown
                if (recipientType === 'student') {
                    const studentSelect = document.getElementById('notificationStudent');
                    studentSelect.innerHTML = '<option value="">Select a student</option>';
                    
                    this.students.forEach(student => {
                        const option = document.createElement('option');
                        option.value = student.id;
                        option.textContent = `${student.name} (${student.id})`;
                        studentSelect.appendChild(option);
                    });
                }
            }

            sendNotification() {
                const title = document.getElementById('notificationTitle').value;
                const message = document.getElementById('notificationMessage').value;
                const recipientType = document.getElementById('notificationRecipient').value;
                
                if (!title || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                let notificationMessage = '';
                
                if (recipientType === 'all') {
                    notificationMessage = `Notification to all students: ${message}`;
                } else if (recipientType === 'course') {
                    const courseId = document.getElementById('notificationCourse').value;
                    const course = this.courses.find(c => c.id === courseId);
                    notificationMessage = `Notification to ${course?.name} course: ${message}`;
                } else if (recipientType === 'student') {
                    const studentId = document.getElementById('notificationStudent').value;
                    const student = this.students.find(s => s.id === studentId);
                    notificationMessage = `Notification to ${student?.name}: ${message}`;
                }
                
                this.addNotification(title, notificationMessage);
                
                document.getElementById('sendNotificationForm').reset();
                bootstrap.Modal.getInstance(document.getElementById('sendNotificationModal')).hide();
                
                this.showToast('Notification sent successfully!');
            }

            openCreateGroupModal() {
                const modal = new bootstrap.Modal(document.getElementById('createGroupModal'));
                const membersList = document.getElementById('groupMembersList');
                membersList.innerHTML = '';
                
                this.students.forEach(student => {
                    const checkbox = document.createElement('div');
                    checkbox.className = 'form-check';
                    checkbox.innerHTML = `
                        <input class="form-check-input" type="checkbox" value="${student.id}" id="member_${student.id}">
                        <label class="form-check-label" for="member_${student.id}">
                            ${student.name} (${student.course})
                        </label>
                    `;
                    membersList.appendChild(checkbox);
                });
                
                modal.show();
            }

            createGroup() {
                const name = document.getElementById('groupName').value;
                const description = document.getElementById('groupDescription').value;
                
                if (!name) {
                    alert('Please enter a group name');
                    return;
                }
                
                // Get selected members
                const selectedMembers = [];
                document.querySelectorAll('#groupMembersList input:checked').forEach(checkbox => {
                    selectedMembers.push(checkbox.value);
                });
                
                // Add admin to members
                selectedMembers.push('admin');
                
                const lastId = this.chatGroups.length > 0 ? 
                    parseInt(this.chatGroups[this.chatGroups.length-1].id.substring(1)) : 0;
                const newId = `G${(lastId + 1).toString().padStart(3, '0')}`;
                
                this.chatGroups.push({
                    id: newId,
                    name: name,
                    description: description,
                    members: selectedMembers,
                    createdAt: this.getTodayDate(),
                    unreadCount: 0
                });
                
                this.saveData();
                this.loadChatGroups();
                
                bootstrap.Modal.getInstance(document.getElementById('createGroupModal')).hide();
                document.getElementById('createGroupForm').reset();
                
                this.showToast(`Group "${name}" created successfully!`);
            }

            loadCalendar() {
                const calendar = document.getElementById('calendar');
                if (!calendar) return;
                
                const today = new Date();
                const currentMonth = today.getMonth();
                const currentYear = today.getFullYear();
                
                // Create calendar header
                let calendarHTML = '<div class="calendar-header">Sun</div>';
                calendarHTML += '<div class="calendar-header">Mon</div>';
                calendarHTML += '<div class="calendar-header">Tue</div>';
                calendarHTML += '<div class="calendar-header">Wed</div>';
                calendarHTML += '<div class="calendar-header">Thu</div>';
                calendarHTML += '<div class="calendar-header">Fri</div>';
                calendarHTML += '<div class="calendar-header">Sat</div>';
                
                // Get first day of month
                const firstDay = new Date(currentYear, currentMonth, 1).getDay();
                
                // Add empty cells for days before first day of month
                for (let i = 0; i < firstDay; i++) {
                    calendarHTML += '<div class="calendar-day"></div>';
                }
                
                // Get number of days in month
                const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                
                // Add days of month
                for (let day = 1; day <= daysInMonth; day++) {
                    const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                    const isToday = day === today.getDate() && currentMonth === today.getMonth();
                    const dayEvents = this.events.filter(e => e.date === dateStr);
                    
                    let dayHTML = `<div class="calendar-day ${isToday ? 'today' : ''} ${dayEvents.length > 0 ? 'has-event' : ''}">`;
                    dayHTML += `<div class="fw-bold mb-2">${day}</div>`;
                    
                    dayEvents.forEach(event => {
                        dayHTML += `<div class="event-item">${event.title}</div>`;
                    });
                    
                    dayHTML += '</div>';
                    calendarHTML += dayHTML;
                }
                
                calendar.innerHTML = calendarHTML;
            }

            addEvent() {
                const title = document.getElementById('eventTitle').value;
                const date = document.getElementById('eventDate').value;
                const course = document.getElementById('eventCourse').value;
                const description = document.getElementById('eventDescription').value;
                
                if (!title || !date) {
                    alert('Please fill in required fields');
                    return;
                }
                
                const newEvent = {
                    id: this.events.length + 1,
                    title: title,
                    date: date,
                    course: course || 'All',
                    description: description,
                    type: 'event'
                };
                
                this.events.push(newEvent);
                this.saveData();
                this.loadCalendar();
                
                bootstrap.Modal.getInstance(document.getElementById('addEventModal')).hide();
                document.getElementById('addEventForm').reset();
                
                this.showToast('Event added successfully!');
            }

            exportData() {
                const data = {
                    students: this.students,
                    courses: this.courses,
                    attendance: this.attendance,
                    events: this.events,
                    exportDate: new Date().toISOString()
                };
                
                const dataStr = JSON.stringify(data, null, 2);
                const dataBlob = new Blob([dataStr], {type: 'application/json'});
                const url = URL.createObjectURL(dataBlob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `thinknext-data-${this.getTodayDate()}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                
                this.showToast('Data exported successfully!');
            }

            exportReport() {
                // Create a simple CSV report
                let csvContent = "data:text/csv;charset=utf-8,";
                
                // Student report
                csvContent += "Student Report\n";
                csvContent += "ID,Name,Email,Phone,Course,Joining Date,Status\n";
                
                this.students.forEach(student => {
                    csvContent += `${student.id},${student.name},${student.email},${student.phone},${student.course},${student.joiningDate},${student.status}\n`;
                });
                
                csvContent += "\nAttendance Report\n";
                csvContent += "Date,Student ID,Name,Course,Status,Time\n";
                
                this.attendance.forEach(record => {
                    csvContent += `${record.date},${record.studentId},${record.name},${record.course},${record.status},${record.time}\n`;
                });
                
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", `thinknext-report-${this.getTodayDate()}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                this.showToast('Report exported successfully!');
            }
        }

        // Initialize the system when page loads
        document.addEventListener('DOMContentLoaded', () => {
            window.thinkNextSystem = new ThinkNextSystem();
        });
