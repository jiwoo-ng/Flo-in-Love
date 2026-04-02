// ===== Mock Data =====
const mockPosts = [
  {
    id: 1,
    author: "Lily Chen",
    avatar: "https://i.pravatar.cc/150?img=1",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&h=600&fit=crop",
    tag: "#SpringBlooms",
    text: "My garden peonies finally opened today! Three months of careful watering and pruning paid off. The soft pink petals make every morning feel magical.",
    likes: 124,
    comments: 18,
    liked: false
  },
  {
    id: 2,
    author: "Marco Rossi",
    avatar: "https://i.pravatar.cc/150?img=11",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
    tag: "#RaisedBedGarden",
    text: "Built my first raised bed this weekend using cedar planks! Already planted tomatoes, basil, and marigolds along the border to keep pests away. Any companion planting tips?",
    likes: 287,
    comments: 34,
    liked: false
  },
  {
    id: 3,
    author: "Hana Kim",
    avatar: "https://i.pravatar.cc/150?img=5",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=600&h=600&fit=crop",
    tag: "#CherryBlossom",
    text: "Cherry blossom season in full swing! Every street in my neighborhood looks like a painting. Swept petals off the walkway three times today and I'm not even mad.",
    likes: 432,
    comments: 56,
    liked: false
  },
  {
    id: 4,
    author: "Emma Taylor",
    avatar: "https://i.pravatar.cc/150?img=9",
    time: "8 hours ago",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=600&fit=crop",
    tag: "#CompostJourney",
    text: "Six months into composting and I finally got that dark, crumbly 'black gold' everyone talks about. Mixed it into my flower beds this morning and the soil looks incredible. Worth every turning!",
    likes: 198,
    comments: 22,
    liked: false
  },
  {
    id: 5,
    author: "James Park",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "10 hours ago",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop",
    tag: "#SunflowerGrow",
    text: "Planted sunflower seeds with my kids back in March. Now they're taller than the fence! The kids race out every morning to measure them. Gardening is the best family activity.",
    likes: 356,
    comments: 41,
    liked: false
  },
  {
    id: 6,
    author: "Sofia Muller",
    avatar: "https://i.pravatar.cc/150?img=16",
    time: "12 hours ago",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&h=600&fit=crop",
    tag: "#BalconyGarden",
    text: "Proof you don't need a yard to garden! My tiny apartment balcony now has lavender, petunias, and a mini herb corner. The bees have already found it. Urban gardening for the win!",
    likes: 521,
    comments: 67,
    liked: false
  },
  {
    id: 7,
    author: "Aisha Patel",
    avatar: "https://i.pravatar.cc/150?img=23",
    time: "1 day ago",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=600&fit=crop",
    tag: "#OrchidCare",
    text: "After three failed attempts, my orchid finally bloomed again! The secret: ice cube watering once a week and indirect sunlight. Sometimes less is more with plant care.",
    likes: 89,
    comments: 15,
    liked: false
  },
  {
    id: 8,
    author: "Lucas Martin",
    avatar: "https://i.pravatar.cc/150?img=33",
    time: "1 day ago",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&h=600&fit=crop",
    tag: "#SeedStarting",
    text: "My indoor seed starting station is fully loaded! Trays of zinnias, cosmos, and wildflower mix under grow lights. In six weeks these little sprouts will transform the front yard.",
    likes: 267,
    comments: 29,
    liked: false
  },
  {
    id: 9,
    author: "Yuki Tanaka",
    avatar: "https://i.pravatar.cc/150?img=25",
    time: "2 days ago",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&h=600&fit=crop",
    tag: "#GardenFail",
    text: "Accidentally overwatered my succulents... again. Lost two echeverias to root rot this week. Sharing my failure so you don't repeat it. Let your soil dry completely between waterings!",
    likes: 178,
    comments: 20,
    liked: false
  },
  {
    id: 10,
    author: "Clara Jensen",
    avatar: "https://i.pravatar.cc/150?img=20",
    time: "2 days ago",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop",
    tag: "#CottageGarden",
    text: "Two years ago this was just a bare patch of lawn. Now it's a full cottage garden with foxgloves, delphiniums, and climbing roses on the trellis. Patience and mulch do wonders!",
    likes: 312,
    comments: 38,
    liked: false
  }
];

// ===== Render =====
const feed = document.getElementById("feed");

function renderCard(post) {
  const card = document.createElement("article");
  card.className = "card";

  const isOwn = post.author === "You";
  const editBtn = isOwn
    ? `<button class="edit-btn" data-id="${post.id}" aria-label="Edit post">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </button>`
    : "";

  card.innerHTML = `
    <div class="card-header">
      <img class="avatar" src="${post.avatar}" alt="${post.author}">
      <div class="author-info">
        <span class="author-name">${post.author}</span>
        <span class="post-time">${post.time}</span>
      </div>
      ${editBtn}
    </div>
    <img class="card-image" src="${post.image}" alt="${post.tag}" loading="lazy">
    <div class="card-body">
      <span class="card-tag">${post.tag}</span>
      <p class="card-text">${post.text}</p>
    </div>
    <div class="card-actions">
      <button class="action-btn like-btn${post.liked ? " liked" : ""}" data-id="${post.id}">
        <span class="icon">${post.liked ? "&#9829;" : "&#9825;"}</span>
        <span class="count">${post.likes}</span>
      </button>
      <button class="action-btn comment-btn">
        <span class="icon">&#128172;</span>
        <span class="count">${post.comments}</span>
      </button>
    </div>
  `;
  return card;
}

function attachEditListeners(container) {
  container.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", () => openEditModal(Number(btn.dataset.id)));
  });
}

function renderFeed() {
  feed.innerHTML = "";
  mockPosts.forEach(post => feed.appendChild(renderCard(post)));
  attachLikeListeners();
  attachEditListeners(feed);
}

// ===== Like Toggle =====
function attachLikeListeners() {
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const post = mockPosts.find(p => p.id === id);
      if (!post) return;

      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;

      const icon = btn.querySelector(".icon");
      const count = btn.querySelector(".count");
      icon.innerHTML = post.liked ? "&#9829;" : "&#9825;";
      count.textContent = post.likes;
      btn.classList.toggle("liked", post.liked);
    });
  });
}

// ===== Modal =====
const overlay = document.getElementById("modalOverlay");
const btnNew = document.getElementById("btnNewPost");
const btnClose = document.getElementById("modalClose");
const form = document.getElementById("newPostForm");
const postImageFile = document.getElementById("postImageFile");
const uploadPreview = document.getElementById("uploadPreview");
const uploadPlaceholder = document.getElementById("uploadPlaceholder");

let pendingImageDataUrl = null;

// ===== Word Counter =====
const MAX_WORDS = 500;
const postContent = document.getElementById("postContent");
const wordCounter = document.getElementById("wordCounter");

function countWords(text) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function updateWordCounter() {
  const count = countWords(postContent.value);
  const remaining = MAX_WORDS - count;
  wordCounter.textContent = `${remaining} word${remaining === 1 ? "" : "s"} left`;

  wordCounter.classList.remove("warn", "limit");
  if (remaining <= 0) {
    wordCounter.classList.add("limit");
  } else if (remaining <= 50) {
    wordCounter.classList.add("warn");
  }
}

postContent.addEventListener("input", () => {
  const words = postContent.value.trim().split(/\s+/);
  if (words.length > MAX_WORDS) {
    postContent.value = words.slice(0, MAX_WORDS).join(" ");
  }
  updateWordCounter();
});

// File upload preview for new post
postImageFile.addEventListener("change", () => {
  const file = postImageFile.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    pendingImageDataUrl = e.target.result;
    uploadPreview.src = pendingImageDataUrl;
    uploadPreview.style.display = "block";
    uploadPlaceholder.style.display = "none";
  };
  reader.readAsDataURL(file);
});

function resetUploadArea() {
  pendingImageDataUrl = null;
  uploadPreview.src = "";
  uploadPreview.style.display = "none";
  uploadPlaceholder.style.display = "flex";
  postImageFile.value = "";
}

btnNew.addEventListener("click", () => overlay.classList.add("active"));
btnClose.addEventListener("click", () => overlay.classList.remove("active"));
overlay.addEventListener("click", e => {
  if (e.target === overlay) overlay.classList.remove("active");
});

let nextId = mockPosts.length + 1;

form.addEventListener("submit", e => {
  e.preventDefault();
  const tag = document.getElementById("postTag").value.trim();
  const text = document.getElementById("postContent").value.trim();
  const image = pendingImageDataUrl || "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&h=600&fit=crop";

  const newPost = {
    id: nextId++,
    author: "You",
    avatar: "https://i.pravatar.cc/150?img=50",
    time: "Just now",
    image,
    tag: tag.startsWith("#") ? tag : `#${tag}`,
    text,
    likes: 0,
    comments: 0,
    liked: false
  };

  mockPosts.unshift(newPost);
  renderFeed();

  form.reset();
  resetUploadArea();
  updateWordCounter();
  overlay.classList.remove("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Edit Modal =====
const editOverlay = document.getElementById("editModalOverlay");
const editClose = document.getElementById("editModalClose");
const editForm = document.getElementById("editPostForm");
const editImageFile = document.getElementById("editPostImageFile");
const editUploadPreview = document.getElementById("editUploadPreview");
const editUploadPlaceholder = document.getElementById("editUploadPlaceholder");

let editPendingImageDataUrl = null;

editImageFile.addEventListener("change", () => {
  const file = editImageFile.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    editPendingImageDataUrl = e.target.result;
    editUploadPreview.src = editPendingImageDataUrl;
    editUploadPreview.style.display = "block";
    editUploadPlaceholder.style.display = "none";
  };
  reader.readAsDataURL(file);
});

function openEditModal(postId) {
  const post = mockPosts.find(p => p.id === postId);
  if (!post) return;
  document.getElementById("editPostId").value = postId;
  document.getElementById("editPostTag").value = post.tag;
  document.getElementById("editPostContent").value = post.text;

  // Show current image as preview
  editPendingImageDataUrl = null;
  editImageFile.value = "";
  editUploadPreview.src = post.image;
  editUploadPreview.style.display = "block";
  editUploadPlaceholder.style.display = "none";

  editOverlay.classList.add("active");
}

editClose.addEventListener("click", () => editOverlay.classList.remove("active"));
editOverlay.addEventListener("click", e => {
  if (e.target === editOverlay) editOverlay.classList.remove("active");
});

editForm.addEventListener("submit", e => {
  e.preventDefault();
  const postId = Number(document.getElementById("editPostId").value);
  const post = mockPosts.find(p => p.id === postId);
  if (!post) return;

  const tag = document.getElementById("editPostTag").value.trim();
  post.tag = tag.startsWith("#") ? tag : `#${tag}`;
  post.text = document.getElementById("editPostContent").value.trim();
  if (editPendingImageDataUrl) post.image = editPendingImageDataUrl;
  post.time = "Edited just now";

  renderFeed();
  editOverlay.classList.remove("active");
});

// ===== Page Navigation =====
const navBtns = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  navBtns.forEach(btn => {
    const isTarget = btn.dataset.page === pageId;
    btn.classList.toggle("active", isTarget);

    // Pop animation on click
    if (isTarget) {
      btn.classList.remove("pop");
      void btn.offsetWidth; // trigger reflow
      btn.classList.add("pop");
    }
  });

  // Render page-specific content
  if (pageId === "pageFind") renderFindPage();
  if (pageId === "pageProfile") renderProfilePage();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navBtns.forEach(btn => {
  btn.addEventListener("click", () => navigateTo(btn.dataset.page));
});

// ===== Find Page =====
function renderFindPage() {
  const tagsContainer = document.getElementById("findTags");
  const grid = document.getElementById("findGrid");
  const searchInput = document.getElementById("searchInput");

  // Collect unique tags
  const allTags = [...new Set(mockPosts.map(p => p.tag))];

  tagsContainer.innerHTML = allTags.map(tag =>
    `<button class="find-tag-chip" data-tag="${tag}">${tag}</button>`
  ).join("");

  // Render grid
  function renderGrid(posts) {
    grid.innerHTML = posts.map(post =>
      `<div class="find-grid-item" data-id="${post.id}">
        <img src="${post.image}" alt="${post.tag}" loading="lazy">
      </div>`
    ).join("");

    // Click grid item -> go to home and scroll to post
    grid.querySelectorAll(".find-grid-item").forEach(item => {
      item.addEventListener("click", () => {
        navigateTo("pageHome");
        const idx = mockPosts.findIndex(p => p.id === Number(item.dataset.id));
        if (idx >= 0) {
          const cards = document.querySelectorAll("#feed .card");
          if (cards[idx]) cards[idx].scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });
  }

  renderGrid(mockPosts);

  // Tag chip click filter
  let activeTag = null;
  tagsContainer.querySelectorAll(".find-tag-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.tag;
      if (activeTag === tag) {
        activeTag = null;
        chip.classList.remove("active");
        renderGrid(mockPosts);
      } else {
        activeTag = tag;
        tagsContainer.querySelectorAll(".find-tag-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        renderGrid(mockPosts.filter(p => p.tag === tag));
      }
      searchInput.value = "";
    });
  });

  // Search input filter
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase().trim();
    tagsContainer.querySelectorAll(".find-tag-chip").forEach(c => c.classList.remove("active"));
    activeTag = null;

    if (!q) {
      renderGrid(mockPosts);
      return;
    }
    const filtered = mockPosts.filter(p =>
      p.tag.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.text.toLowerCase().includes(q)
    );
    renderGrid(filtered);
  });
}

// ===== Profile Page =====
function renderProfilePage() {
  const profileFeed = document.getElementById("profileFeed");
  const emptyMsg = document.getElementById("emptyProfile");

  const myPosts = mockPosts.filter(p => p.author === "You");
  const totalLikes = myPosts.reduce((sum, p) => sum + p.likes, 0);

  document.getElementById("statPosts").textContent = myPosts.length;
  document.getElementById("statLikes").textContent = totalLikes;

  profileFeed.innerHTML = "";
  if (myPosts.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
    myPosts.forEach(post => profileFeed.appendChild(renderCard(post)));
    attachEditListeners(profileFeed);
    // Re-attach like listeners for profile feed cards
    profileFeed.querySelectorAll(".like-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        const post = mockPosts.find(p => p.id === id);
        if (!post) return;
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        const icon = btn.querySelector(".icon");
        const count = btn.querySelector(".count");
        icon.innerHTML = post.liked ? "&#9829;" : "&#9825;";
        count.textContent = post.likes;
        btn.classList.toggle("liked", post.liked);
      });
    });
  }
}

// ===== Init =====
renderFeed();
