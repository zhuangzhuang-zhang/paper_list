window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-02T14:19:24.415042+00:00",
  "description": "按北京时间每天 08:00 的固定批次归档，展示上一批次 24 小时内新发布的高相关论文。",
  "dateWindowDays": 1,
  "categories": [
    "cs.RO",
    "cs.AI",
    "cs.CV",
    "cs.LG"
  ],
  "keywords": [
    "vision-language-action",
    "world action model",
    "robotics",
    "autonomous driving"
  ],
  "selectionMethod": "rule_based",
  "modelInfo": null,
  "batchWindow": {
    "start": "2026-06-01T08:00:00+08:00",
    "end": "2026-06-02T08:00:00+08:00"
  },
  "currentDateKey": "20260602",
  "papers": [
    {
      "id": "2606.01951v1",
      "title": "Co-training with Ego-centric Video and Demonstration for Robot Navigation Task",
      "summary": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applying such approaches t…",
      "summaryRaw": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applying such approaches to mobile robot navigation remains challenging due to viewpoint changes during locomotion. In this paper, we propose a framework that converts egocentric walking videos into datasets for mobile robot imitation learning. The proposed method estimates camera motion from human videos and transforms it into action representations compatible with ground mobile robots. By jointly training a VLA model on human-derived and robot-collected datasets, the model achieves improved language understanding and more robust action generation than training with either data source alone. Experiments on a fruit-search navigation task demonstrate that human egocentric videos provide an effective and scalable data source for mobile robot learning.",
      "link": "https://arxiv.org/abs/2606.01951v1",
      "pdfLink": "https://arxiv.org/pdf/2606.01951v1",
      "published": "2026-06-01T09:12:22Z",
      "updated": "2026-06-01T09:12:22Z",
      "authors": [
        "Shoya Kuno",
        "Yumo Ouchi",
        "Kanata Suzuki"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 66,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦VLA、机器人，适合纳入今日重点关注。",
      "whyImportant": "命中VLA、机器人、新基准、通用框架主题，分类覆盖cs.RO，且发布时间较新。",
      "reasonTags": [
        "VLA",
        "机器人",
        "新基准",
        "通用框架"
      ]
    },
    {
      "id": "2606.02027v1",
      "title": "World-Task Factorization for Robot Learning",
      "summary": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. In this paper, we study what we argue is the most fundamental factorization in robotics: separating the world from the task.",
      "summaryRaw": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. To achieve this, we must structurally factor the policy, which is a choice that dictates what generalizes, what requires retraining, and what remains entangled. Existing methods span a wide spectrum, from expecting structure to emerge from data scaling, to hand-designing it via hierarchies, skill libraries or learned specializations. In this paper, we study what we argue is the most fundamental factorization in robotics: separating the world from the task. We investigate the conditions under which this factorization is principled. World factors are properties of the embodied system and the environment; they exist independently of intent. Task factors are defined by the task's logic over what the world admits. We formalize this asymmetry through Bayesian model evidence: it aligns with the data-generating process, maintains high likelihood through an analytical world model, and reduces the Occam razor's penalty on task parameters. We instantiate this factorization by pairing AICON, a differentiable graph of recursive estimators and interconnections that is compositional, operates without task-specific data, and propagates cost gradients to actuators, with a compact, learned policy that modulates gradient paths. Gradients serve as the interface between the two factors: they carry world structure through the graph and task structure through costs, enabling low-dimensional learning while preserving structural generalization. We test the world/task factorization across three problems that encompass heterogeneous robots, environments, task logic and sensorimotor modalities. Our framework outperforms end-to-end baselines and analytical heuristics in all settings, generalizes zero-shot to out-of-distribution configurations, and transfers to real hardware without retraining.",
      "link": "https://arxiv.org/abs/2606.02027v1",
      "pdfLink": "https://arxiv.org/pdf/2606.02027v1",
      "published": "2026-06-01T10:16:07Z",
      "updated": "2026-06-01T10:16:07Z",
      "authors": [
        "Eduardo Sebastián",
        "Adrian Pfisterer",
        "Vito Mengers",
        "Oliver Brock",
        "Amanda Prorok"
      ],
      "categories": [
        "cs.LG",
        "cs.RO"
      ],
      "score": 64,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦WAM、机器人，适合纳入今日重点关注。",
      "whyImportant": "命中WAM、机器人、通用框架主题，分类覆盖cs.LG / cs.RO，且发布时间较新。",
      "reasonTags": [
        "WAM",
        "机器人",
        "通用框架"
      ]
    },
    {
      "id": "2606.01847v1",
      "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
      "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. We further validate our method on real robot and the results show that our methodology outperfor…",
      "summaryRaw": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operating intrinsically on SE(3). Our method injects noise through left-invariant SDEs, predicts scores in the tangent space, and retracts samples via the exponential map. This formulation eliminates manifold drift by construction while guaranteeing coordinate-frame equivariance and geodesic optimality. On CALVIN ABC$\\rightarrow$D, LDA improves average task length from $3.27$ to $3.51$ ($+7.3\\%$). We further validate our method on real robot and the results show that our methodology outperforms the baseline on majority tasks.",
      "link": "https://arxiv.org/abs/2606.01847v1",
      "pdfLink": "https://arxiv.org/pdf/2606.01847v1",
      "published": "2026-06-01T07:59:29Z",
      "updated": "2026-06-01T07:59:29Z",
      "authors": [
        "Bing-Cheng Chuang",
        "I-Hsuan Chu",
        "Bor-Jiun Lin",
        "YuanFu Yang",
        "Min Sun",
        "Chun-Yi Lee"
      ],
      "categories": [
        "cs.LG",
        "cs.RO"
      ],
      "score": 63,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦VLA、机器人，适合纳入今日重点关注。",
      "whyImportant": "命中VLA、机器人、通用框架主题，分类覆盖cs.LG / cs.RO，且发布时间较新。",
      "reasonTags": [
        "VLA",
        "机器人",
        "通用框架"
      ]
    },
    {
      "id": "2606.02307v1",
      "title": "FATE-VLA:Failue-aware test generation for vision-language-action models",
      "summary": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. We reframe VLA evaluation as an active failure-discovery problem and propose a failure-aware test-generation approach that combines diversity-driven explo…",
      "summaryRaw": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. In high-dimensional embodied spaces, failures are sparse and clustered, so static benchmarking can underestimate robustness risks. We reframe VLA evaluation as an active failure-discovery problem and propose a failure-aware test-generation approach that combines diversity-driven exploration with surrogate models learned from observed executions. The method steers testing toward high-risk yet diverse scene regions. Across four state-of-the-art VLA models, it uncovers substantially more failures (up to +29.7 % over selected baselines) while revealing more diverse failure modes. This mean that, for instance, in the case of GR00T-N1.6, success rate dropped from 64.4% to 34.7%. More broadly, our findings call for a shift in VLA evaluation: from passive measurement on fixed task suites to adaptive, failure-seeking test generation that exposes the structure of model weaknesses before deployment.",
      "link": "https://arxiv.org/abs/2606.02307v1",
      "pdfLink": "https://arxiv.org/pdf/2606.02307v1",
      "published": "2026-06-01T14:27:13Z",
      "updated": "2026-06-01T14:27:13Z",
      "authors": [
        "Arusa Kanwal",
        "Pablo Valle",
        "Shaukat Ali",
        "Aitor Arrieta"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 62,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦VLA、机器人，适合纳入今日重点关注。",
      "whyImportant": "命中VLA、机器人、新基准、通用框架主题，分类覆盖cs.RO，且发布时间较新。",
      "reasonTags": [
        "VLA",
        "机器人",
        "新基准",
        "通用框架"
      ]
    },
    {
      "id": "2606.01955v1",
      "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
      "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Specifically, it pairs event-grounded VLA pretraining with a data ecosystem built from event-level captions and c…",
      "summaryRaw": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch. Language describes semantic goals and events, vision evolves through continuous scene dynamics, and actions operate at control-level timescales; forcing all three into the same fixed-length prediction window turns VLA training into short-horizon correlation fitting. WALL-WM addresses this mismatch by organizing both supervision and data around semantic events. Specifically, it pairs event-grounded VLA pretraining with a data ecosystem built from event-level captions and cluster-balanced sampling, enabling scalable learning over diverse behaviors, scenes, and task structures. From the same event-pretrained backbone, WALL-WM supports two complementary inference modes. The event mode consumes next-event descriptions and enables variable-length execution chunks, while the unified mode uses a VLM with Staircase Decoding to condition conventional fixed-length chunk inference while preserving a gradient-continuous VLA path. Together with Muon-optimizer-based large-scale pretraining infrastructure, WALL-WM provides a practical scale-up recipe for general-purpose WAMs. Experiments show that WALL-WM generalizes broadly across language, scenes, and tasks, achieving state-of-the-art performance in large-scale real-world generalization evaluation.",
      "link": "https://arxiv.org/abs/2606.01955v1",
      "pdfLink": "https://arxiv.org/pdf/2606.01955v1",
      "published": "2026-06-01T09:14:51Z",
      "updated": "2026-06-01T09:14:51Z",
      "authors": [
        "Shalfun Li",
        "Victor Yao",
        "Charles Yang",
        "Truth Qu",
        "Regis Cheng",
        "Ryan Yu",
        "Howard Lu",
        "Newton Von"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "score": 60,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦VLA、WAM，适合纳入今日重点关注。",
      "whyImportant": "命中VLA、WAM、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，且发布时间较新。",
      "reasonTags": [
        "VLA",
        "WAM",
        "新基准",
        "通用框架"
      ]
    },
    {
      "id": "2606.01757v1",
      "title": "PillarDETR: YOLO-Backbone and RT-DETR Head for Real-Time 3D Object Detection",
      "summary": "Real-time 3D object detection is a critical component for the safe operation of autonomous driving systems and robotics. While LiDAR point clouds provide accurate spatial information, processing them efficiently remains a significant challenge.",
      "summaryRaw": "Real-time 3D object detection is a critical component for the safe operation of autonomous driving systems and robotics. While LiDAR point clouds provide accurate spatial information, processing them efficiently remains a significant challenge. Traditional methods rely on complex 3D convolutions or anchor-based paradigms that struggle to balance detection accuracy with inference speed. In this paper, we propose PillarDETR, a novel end-to-end 3D object detection architecture that combines the efficiency of pillar-based LiDAR encoding with the representational power of modern 2D vision models. Specifically, PillarDETR replaces standard convolutional backbones with a Cross Stage Partial (CSP) network derived from YOLOv8, enabling richer feature extraction from pseudoimages. Furthermore, we discard conventional anchor-based or center-based detection heads in favor of a Real-Time Detection Transformer (RT-DETR) decoder. This hybrid design allows the network to capture global context and directly predict 3D bounding boxes without relying on non-maximum suppression (NMS). Extensive experiments on the KITTI and nuScenes benchmarks demonstrate that PillarDETR achieves a compelling trade-off between mean Average Precision (mAP) and inference latency. Our ablation studies confirm that integrating the YOLOv8 backbone and RT-DETR head yields substantial improvements over the PointPillars baseline, establishing PillarDETR as a highly effective solution for real-time 3D perception.",
      "link": "https://arxiv.org/abs/2606.01757v1",
      "pdfLink": "https://arxiv.org/pdf/2606.01757v1",
      "published": "2026-06-01T06:22:47Z",
      "updated": "2026-06-01T06:22:47Z",
      "authors": [
        "Smit Kadvani",
        "Shriya Gumber",
        "Kriti Faujdar",
        "Harsh Dave"
      ],
      "categories": [
        "cs.CV"
      ],
      "score": 53,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦机器人、自动驾驶，适合纳入今日重点关注。",
      "whyImportant": "命中机器人、自动驾驶、新基准主题，分类覆盖cs.CV，且发布时间较新。",
      "reasonTags": [
        "机器人",
        "自动驾驶",
        "新基准"
      ]
    },
    {
      "id": "2606.01600v1",
      "title": "RoboTrustBench: Benchmarking the Trustworthiness of Video World Models for Robotic Manipulation",
      "summary": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. These results show that visual quality and surface-level instruction following are insufficient for trustworthy robotic video world modeling.",
      "summaryRaw": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. We introduce RoboTrustBench, a benchmark for evaluating the trustworthiness of video world models under four scenarios: Normal, Constraint-Sensitive, Counterfactual, and Adversarial. Built from real-world DROID episodes, RoboTrustBench contains 1,207 expert-validated instruction-image pairs and a six-dimensional evaluation protocol with 13 fine-grained criteria. Evaluating seven representative video world models with human and MLLM assessment, we find that current models often generate visually coherent videos, but struggle with constraint reasoning, counterfactual grounding, physical interaction, and unsafe-instruction suppression. These results show that visual quality and surface-level instruction following are insufficient for trustworthy robotic video world modeling.",
      "link": "https://arxiv.org/abs/2606.01600v1",
      "pdfLink": "https://arxiv.org/pdf/2606.01600v1",
      "published": "2026-06-01T02:56:09Z",
      "updated": "2026-06-01T02:56:09Z",
      "authors": [
        "Huiqiong Li",
        "Jiayu Wang",
        "Zhiting Mei",
        "Anirudha Majumdar",
        "Jingjing Chen",
        "Bin Zhu"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "score": 52,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦WAM、机器人，适合纳入今日重点关注。",
      "whyImportant": "命中WAM、机器人、新基准主题，分类覆盖cs.CV / cs.RO，且发布时间较新。",
      "reasonTags": [
        "WAM",
        "机器人",
        "新基准"
      ]
    },
    {
      "id": "2606.01545v1",
      "title": "Hierarchical Object Representation for Spatial Robot Perception: Points, Meshes, and Superquadrics",
      "summary": "In this work, we introduce a hierarchical object representation that can be leveraged for high-fidelity object-level reconstruction, object-based robust re-localization or map alignment, and efficient and analytical collision checking for safe robot navigation planning in dense and cluttered environments. Our code can be found at https:/…",
      "summaryRaw": "Hierarchical 3D Scene Graphs (3DSG) have emerged as an actionable and scalable representation for long-term autonomy incorporating metric, semantic, and topological information in the scene. However, the question of geometric representation of objects in 3DSG has been overlooked as most methods use simplified geometric models such as partial point clouds or 3D bounding boxes. In this work, we introduce a hierarchical object representation that can be leveraged for high-fidelity object-level reconstruction, object-based robust re-localization or map alignment, and efficient and analytical collision checking for safe robot navigation planning in dense and cluttered environments. The representation is structurally organized into four distinct layers, progressively abstracting the scene from raw sensor data to dense 3D meshes to analytical primitives such as superquadrics, which provide a sparse and analytical representation for object geometry. We develop a pipeline that builds the hierarchical object representation from RGB-D image stream captured by a robot, and demonstrate its working in real-world open-set object scenes in both indoor and outdoor environments. Extensive experiments across diverse datasets including HOPE, ReplicaCAD, Kimera-Multi, and NUS Campus Dataset collected using Unitree B2 Robot validate our pipeline in both indoor and outdoor environments. We show that our superquadric-based map alignment method outperforms the current state-of-the-art object based map alignment method ROMAN. Our code can be found at https://github.com/perceptica-robotics/Hickory.",
      "link": "https://arxiv.org/abs/2606.01545v1",
      "pdfLink": "https://arxiv.org/pdf/2606.01545v1",
      "published": "2026-06-01T01:45:47Z",
      "updated": "2026-06-01T01:45:47Z",
      "authors": [
        "Ceng Zhang",
        "Wan Su",
        "Mohamed Samshad",
        "Gregory S. Chirikjian",
        "Rajat Talak"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 52,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦机器人、新基准，适合纳入今日重点关注。",
      "whyImportant": "命中机器人、新基准主题，分类覆盖cs.RO，且发布时间较新。",
      "reasonTags": [
        "机器人",
        "新基准"
      ]
    },
    {
      "id": "2606.02562v1",
      "title": "Permissive Safety Through Trusted Inference: Verifiable Belief-Space Neural Safety Filters for Assured Interactive Robotics",
      "summary": "Autonomous robots that interact with people must make safe and efficient decisions under human-induced uncertainty, such as their preferences, goals, competency, and willingness to cooperate. Safety filters are a popular approach for ensuring safety in interactive robotics, since their modular design separates safety from performance, al…",
      "summaryRaw": "Autonomous robots that interact with people must make safe and efficient decisions under human-induced uncertainty, such as their preferences, goals, competency, and willingness to cooperate. Safety filters are a popular approach for ensuring safety in interactive robotics, since their modular design separates safety from performance, allowing robots to operate safely around people with minimal impact on task efficiency. While traditional safety filters typically operate only in the physical space, neglecting the robot's ability to learn and adapt online, the recently proposed belief-space safety filter (BeliefSF) reasons about robot safety in closed-loop with runtime inference that actively reduces the robot's uncertainty online, thereby reducing conservativeness in filtering. However, providing formal safety guarantees for robots deploying BeliefSF remains a significant challenge due to errors in runtime inference and neural approximation of safety filters required to handle the high dimensionality of belief spaces. In this paper, we propose an algorithmic approach to certify high-probability safety of BeliefSF using conformal prediction, while explicitly accounting for the reliability of the robot's runtime inference module. Our method leverages the structure of belief-space safety filtering by focusing verification on a region where inference is expected to be reliable. It preserves the simplicity and sample complexity of standard conformal prediction, yet can certify a substantially less conservative safety filter. Through a simulated human-vehicle interaction benchmark, we show that our approach verifies a significantly more permissive belief-space safety filter than a standard conformal prediction baseline.",
      "link": "https://arxiv.org/abs/2606.02562v1",
      "pdfLink": "https://arxiv.org/pdf/2606.02562v1",
      "published": "2026-06-01T17:54:00Z",
      "updated": "2026-06-01T17:54:00Z",
      "authors": [
        "Haimin Hu"
      ],
      "categories": [
        "cs.AI",
        "cs.LG",
        "cs.RO"
      ],
      "score": 49,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦机器人、新基准，适合纳入今日重点关注。",
      "whyImportant": "命中机器人、新基准主题，分类覆盖cs.AI / cs.LG，且发布时间较新。",
      "reasonTags": [
        "机器人",
        "新基准"
      ]
    },
    {
      "id": "2606.01788v1",
      "title": "PlatonicNav: Unveiling Semantic Correspondence in Navigation with Platonic Topological Maps",
      "summary": "Embodied visual navigation, where an agent perceives a complex environment and acts to reach a goal from raw sensory input, underpins a wide range of applications such as household service robotics, assistive robotics, and large-scale autonomous exploration. To address these challenges, we extend the Platonic Representation Hypothesis to…",
      "summaryRaw": "Embodied visual navigation, where an agent perceives a complex environment and acts to reach a goal from raw sensory input, underpins a wide range of applications such as household service robotics, assistive robotics, and large-scale autonomous exploration. However, recent attempts to unify vision-and-language navigation (VLN) and object goal navigation (ObjNav) remain at the level of architectural fusion, mixed-task training, and large vision-language pretraining, without examining whether independently trained vision and language encoders may already share a common semantic structure. Moreover, even object-centric topological maps still ground language goals through explicit cross-modal supervision such as CLIP or large vision-language models, leaving open whether such grounding is possible from a purely vision-built map. To address these challenges, we extend the Platonic Representation Hypothesis to embodied navigation and recast vision-only ObjNav, cross-modal ObjNav, and VLN as three different interfaces to the same object-centric semantic manifold. We further introduce PlatonicNav, a training-free framework whose Platonic Topological Map fuses geometric and semantic node distances from a self-supervised visual encoder, and grounds language goals via blind matching without any paired vision-language data. Extensive experiments on simulation benchmarks including HM3D-IIN, OVON, and R2R-CE on MP3D, together with deployment on Unitree Go2, demonstrate that PlatonicNav generalizes across tasks, modalities, and embodiments without explicit cross-modal training. Code: https://github.com/AIGeeksGroup/PlatonicNav. Website: https://aigeeksgroup.github.io/PlatonicNav.",
      "link": "https://arxiv.org/abs/2606.01788v1",
      "pdfLink": "https://arxiv.org/pdf/2606.01788v1",
      "published": "2026-06-01T07:08:50Z",
      "updated": "2026-06-01T07:08:50Z",
      "authors": [
        "Junlin Long",
        "Zeyu Zhang",
        "Xu Deng",
        "Yiran Wang",
        "Yue Yang",
        "Luke Borgnolo",
        "Maxwell Twelftree",
        "Yang Zhao"
      ],
      "categories": [
        "cs.CV"
      ],
      "score": 49,
      "importanceLevel": "S",
      "oneSentenceSummary": "该论文聚焦机器人、新基准，适合纳入今日重点关注。",
      "whyImportant": "命中机器人、新基准、通用框架主题，分类覆盖cs.CV，且发布时间较新。",
      "reasonTags": [
        "机器人",
        "新基准",
        "通用框架"
      ]
    }
  ],
  "archives": [
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-02T14:19:24.415042+00:00",
      "paperCount": 10,
      "papers": [
        {
          "id": "2606.01951v1",
          "title": "Co-training with Ego-centric Video and Demonstration for Robot Navigation Task",
          "summary": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applying such approaches t…",
          "summaryRaw": "Vision-language-action (VLA) models are promising for diverse robotic tasks, but their performance heavily depends on large-scale high-quality training data, whose collection on real robots is costly and time-consuming. While prior work has explored augmenting manipulation datasets with egocentric human videos, applying such approaches to mobile robot navigation remains challenging due to viewpoint changes during locomotion. In this paper, we propose a framework that converts egocentric walking videos into datasets for mobile robot imitation learning. The proposed method estimates camera motion from human videos and transforms it into action representations compatible with ground mobile robots. By jointly training a VLA model on human-derived and robot-collected datasets, the model achieves improved language understanding and more robust action generation than training with either data source alone. Experiments on a fruit-search navigation task demonstrate that human egocentric videos provide an effective and scalable data source for mobile robot learning.",
          "link": "https://arxiv.org/abs/2606.01951v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01951v1",
          "published": "2026-06-01T09:12:22Z",
          "updated": "2026-06-01T09:12:22Z",
          "authors": [
            "Shoya Kuno",
            "Yumo Ouchi",
            "Kanata Suzuki"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 66,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦VLA、机器人，适合纳入今日重点关注。",
          "whyImportant": "命中VLA、机器人、新基准、通用框架主题，分类覆盖cs.RO，且发布时间较新。",
          "reasonTags": [
            "VLA",
            "机器人",
            "新基准",
            "通用框架"
          ]
        },
        {
          "id": "2606.02027v1",
          "title": "World-Task Factorization for Robot Learning",
          "summary": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. In this paper, we study what we argue is the most fundamental factorization in robotics: separating the world from the task.",
          "summaryRaw": "Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. To achieve this, we must structurally factor the policy, which is a choice that dictates what generalizes, what requires retraining, and what remains entangled. Existing methods span a wide spectrum, from expecting structure to emerge from data scaling, to hand-designing it via hierarchies, skill libraries or learned specializations. In this paper, we study what we argue is the most fundamental factorization in robotics: separating the world from the task. We investigate the conditions under which this factorization is principled. World factors are properties of the embodied system and the environment; they exist independently of intent. Task factors are defined by the task's logic over what the world admits. We formalize this asymmetry through Bayesian model evidence: it aligns with the data-generating process, maintains high likelihood through an analytical world model, and reduces the Occam razor's penalty on task parameters. We instantiate this factorization by pairing AICON, a differentiable graph of recursive estimators and interconnections that is compositional, operates without task-specific data, and propagates cost gradients to actuators, with a compact, learned policy that modulates gradient paths. Gradients serve as the interface between the two factors: they carry world structure through the graph and task structure through costs, enabling low-dimensional learning while preserving structural generalization. We test the world/task factorization across three problems that encompass heterogeneous robots, environments, task logic and sensorimotor modalities. Our framework outperforms end-to-end baselines and analytical heuristics in all settings, generalizes zero-shot to out-of-distribution configurations, and transfers to real hardware without retraining.",
          "link": "https://arxiv.org/abs/2606.02027v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02027v1",
          "published": "2026-06-01T10:16:07Z",
          "updated": "2026-06-01T10:16:07Z",
          "authors": [
            "Eduardo Sebastián",
            "Adrian Pfisterer",
            "Vito Mengers",
            "Oliver Brock",
            "Amanda Prorok"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 64,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦WAM、机器人，适合纳入今日重点关注。",
          "whyImportant": "命中WAM、机器人、通用框架主题，分类覆盖cs.LG / cs.RO，且发布时间较新。",
          "reasonTags": [
            "WAM",
            "机器人",
            "通用框架"
          ]
        },
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. We further validate our method on real robot and the results show that our methodology outperfor…",
          "summaryRaw": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operating intrinsically on SE(3). Our method injects noise through left-invariant SDEs, predicts scores in the tangent space, and retracts samples via the exponential map. This formulation eliminates manifold drift by construction while guaranteeing coordinate-frame equivariance and geodesic optimality. On CALVIN ABC$\\rightarrow$D, LDA improves average task length from $3.27$ to $3.51$ ($+7.3\\%$). We further validate our method on real robot and the results show that our methodology outperforms the baseline on majority tasks.",
          "link": "https://arxiv.org/abs/2606.01847v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01847v1",
          "published": "2026-06-01T07:59:29Z",
          "updated": "2026-06-01T07:59:29Z",
          "authors": [
            "Bing-Cheng Chuang",
            "I-Hsuan Chu",
            "Bor-Jiun Lin",
            "YuanFu Yang",
            "Min Sun",
            "Chun-Yi Lee"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 63,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦VLA、机器人，适合纳入今日重点关注。",
          "whyImportant": "命中VLA、机器人、通用框架主题，分类覆盖cs.LG / cs.RO，且发布时间较新。",
          "reasonTags": [
            "VLA",
            "机器人",
            "通用框架"
          ]
        },
        {
          "id": "2606.02307v1",
          "title": "FATE-VLA:Failue-aware test generation for vision-language-action models",
          "summary": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. We reframe VLA evaluation as an active failure-discovery problem and propose a failure-aware test-generation approach that combines diversity-driven explo…",
          "summaryRaw": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. In high-dimensional embodied spaces, failures are sparse and clustered, so static benchmarking can underestimate robustness risks. We reframe VLA evaluation as an active failure-discovery problem and propose a failure-aware test-generation approach that combines diversity-driven exploration with surrogate models learned from observed executions. The method steers testing toward high-risk yet diverse scene regions. Across four state-of-the-art VLA models, it uncovers substantially more failures (up to +29.7 % over selected baselines) while revealing more diverse failure modes. This mean that, for instance, in the case of GR00T-N1.6, success rate dropped from 64.4% to 34.7%. More broadly, our findings call for a shift in VLA evaluation: from passive measurement on fixed task suites to adaptive, failure-seeking test generation that exposes the structure of model weaknesses before deployment.",
          "link": "https://arxiv.org/abs/2606.02307v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02307v1",
          "published": "2026-06-01T14:27:13Z",
          "updated": "2026-06-01T14:27:13Z",
          "authors": [
            "Arusa Kanwal",
            "Pablo Valle",
            "Shaukat Ali",
            "Aitor Arrieta"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 62,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦VLA、机器人，适合纳入今日重点关注。",
          "whyImportant": "命中VLA、机器人、新基准、通用框架主题，分类覆盖cs.RO，且发布时间较新。",
          "reasonTags": [
            "VLA",
            "机器人",
            "新基准",
            "通用框架"
          ]
        },
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Specifically, it pairs event-grounded VLA pretraining with a data ecosystem built from event-level captions and c…",
          "summaryRaw": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch. Language describes semantic goals and events, vision evolves through continuous scene dynamics, and actions operate at control-level timescales; forcing all three into the same fixed-length prediction window turns VLA training into short-horizon correlation fitting. WALL-WM addresses this mismatch by organizing both supervision and data around semantic events. Specifically, it pairs event-grounded VLA pretraining with a data ecosystem built from event-level captions and cluster-balanced sampling, enabling scalable learning over diverse behaviors, scenes, and task structures. From the same event-pretrained backbone, WALL-WM supports two complementary inference modes. The event mode consumes next-event descriptions and enables variable-length execution chunks, while the unified mode uses a VLM with Staircase Decoding to condition conventional fixed-length chunk inference while preserving a gradient-continuous VLA path. Together with Muon-optimizer-based large-scale pretraining infrastructure, WALL-WM provides a practical scale-up recipe for general-purpose WAMs. Experiments show that WALL-WM generalizes broadly across language, scenes, and tasks, achieving state-of-the-art performance in large-scale real-world generalization evaluation.",
          "link": "https://arxiv.org/abs/2606.01955v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01955v1",
          "published": "2026-06-01T09:14:51Z",
          "updated": "2026-06-01T09:14:51Z",
          "authors": [
            "Shalfun Li",
            "Victor Yao",
            "Charles Yang",
            "Truth Qu",
            "Regis Cheng",
            "Ryan Yu",
            "Howard Lu",
            "Newton Von"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 60,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦VLA、WAM，适合纳入今日重点关注。",
          "whyImportant": "命中VLA、WAM、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，且发布时间较新。",
          "reasonTags": [
            "VLA",
            "WAM",
            "新基准",
            "通用框架"
          ]
        },
        {
          "id": "2606.01757v1",
          "title": "PillarDETR: YOLO-Backbone and RT-DETR Head for Real-Time 3D Object Detection",
          "summary": "Real-time 3D object detection is a critical component for the safe operation of autonomous driving systems and robotics. While LiDAR point clouds provide accurate spatial information, processing them efficiently remains a significant challenge.",
          "summaryRaw": "Real-time 3D object detection is a critical component for the safe operation of autonomous driving systems and robotics. While LiDAR point clouds provide accurate spatial information, processing them efficiently remains a significant challenge. Traditional methods rely on complex 3D convolutions or anchor-based paradigms that struggle to balance detection accuracy with inference speed. In this paper, we propose PillarDETR, a novel end-to-end 3D object detection architecture that combines the efficiency of pillar-based LiDAR encoding with the representational power of modern 2D vision models. Specifically, PillarDETR replaces standard convolutional backbones with a Cross Stage Partial (CSP) network derived from YOLOv8, enabling richer feature extraction from pseudoimages. Furthermore, we discard conventional anchor-based or center-based detection heads in favor of a Real-Time Detection Transformer (RT-DETR) decoder. This hybrid design allows the network to capture global context and directly predict 3D bounding boxes without relying on non-maximum suppression (NMS). Extensive experiments on the KITTI and nuScenes benchmarks demonstrate that PillarDETR achieves a compelling trade-off between mean Average Precision (mAP) and inference latency. Our ablation studies confirm that integrating the YOLOv8 backbone and RT-DETR head yields substantial improvements over the PointPillars baseline, establishing PillarDETR as a highly effective solution for real-time 3D perception.",
          "link": "https://arxiv.org/abs/2606.01757v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01757v1",
          "published": "2026-06-01T06:22:47Z",
          "updated": "2026-06-01T06:22:47Z",
          "authors": [
            "Smit Kadvani",
            "Shriya Gumber",
            "Kriti Faujdar",
            "Harsh Dave"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 53,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦机器人、自动驾驶，适合纳入今日重点关注。",
          "whyImportant": "命中机器人、自动驾驶、新基准主题，分类覆盖cs.CV，且发布时间较新。",
          "reasonTags": [
            "机器人",
            "自动驾驶",
            "新基准"
          ]
        },
        {
          "id": "2606.01600v1",
          "title": "RoboTrustBench: Benchmarking the Trustworthiness of Video World Models for Robotic Manipulation",
          "summary": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. These results show that visual quality and surface-level instruction following are insufficient for trustworthy robotic video world modeling.",
          "summaryRaw": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. We introduce RoboTrustBench, a benchmark for evaluating the trustworthiness of video world models under four scenarios: Normal, Constraint-Sensitive, Counterfactual, and Adversarial. Built from real-world DROID episodes, RoboTrustBench contains 1,207 expert-validated instruction-image pairs and a six-dimensional evaluation protocol with 13 fine-grained criteria. Evaluating seven representative video world models with human and MLLM assessment, we find that current models often generate visually coherent videos, but struggle with constraint reasoning, counterfactual grounding, physical interaction, and unsafe-instruction suppression. These results show that visual quality and surface-level instruction following are insufficient for trustworthy robotic video world modeling.",
          "link": "https://arxiv.org/abs/2606.01600v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01600v1",
          "published": "2026-06-01T02:56:09Z",
          "updated": "2026-06-01T02:56:09Z",
          "authors": [
            "Huiqiong Li",
            "Jiayu Wang",
            "Zhiting Mei",
            "Anirudha Majumdar",
            "Jingjing Chen",
            "Bin Zhu"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 52,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦WAM、机器人，适合纳入今日重点关注。",
          "whyImportant": "命中WAM、机器人、新基准主题，分类覆盖cs.CV / cs.RO，且发布时间较新。",
          "reasonTags": [
            "WAM",
            "机器人",
            "新基准"
          ]
        },
        {
          "id": "2606.01545v1",
          "title": "Hierarchical Object Representation for Spatial Robot Perception: Points, Meshes, and Superquadrics",
          "summary": "In this work, we introduce a hierarchical object representation that can be leveraged for high-fidelity object-level reconstruction, object-based robust re-localization or map alignment, and efficient and analytical collision checking for safe robot navigation planning in dense and cluttered environments. Our code can be found at https:/…",
          "summaryRaw": "Hierarchical 3D Scene Graphs (3DSG) have emerged as an actionable and scalable representation for long-term autonomy incorporating metric, semantic, and topological information in the scene. However, the question of geometric representation of objects in 3DSG has been overlooked as most methods use simplified geometric models such as partial point clouds or 3D bounding boxes. In this work, we introduce a hierarchical object representation that can be leveraged for high-fidelity object-level reconstruction, object-based robust re-localization or map alignment, and efficient and analytical collision checking for safe robot navigation planning in dense and cluttered environments. The representation is structurally organized into four distinct layers, progressively abstracting the scene from raw sensor data to dense 3D meshes to analytical primitives such as superquadrics, which provide a sparse and analytical representation for object geometry. We develop a pipeline that builds the hierarchical object representation from RGB-D image stream captured by a robot, and demonstrate its working in real-world open-set object scenes in both indoor and outdoor environments. Extensive experiments across diverse datasets including HOPE, ReplicaCAD, Kimera-Multi, and NUS Campus Dataset collected using Unitree B2 Robot validate our pipeline in both indoor and outdoor environments. We show that our superquadric-based map alignment method outperforms the current state-of-the-art object based map alignment method ROMAN. Our code can be found at https://github.com/perceptica-robotics/Hickory.",
          "link": "https://arxiv.org/abs/2606.01545v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01545v1",
          "published": "2026-06-01T01:45:47Z",
          "updated": "2026-06-01T01:45:47Z",
          "authors": [
            "Ceng Zhang",
            "Wan Su",
            "Mohamed Samshad",
            "Gregory S. Chirikjian",
            "Rajat Talak"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 52,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦机器人、新基准，适合纳入今日重点关注。",
          "whyImportant": "命中机器人、新基准主题，分类覆盖cs.RO，且发布时间较新。",
          "reasonTags": [
            "机器人",
            "新基准"
          ]
        },
        {
          "id": "2606.02562v1",
          "title": "Permissive Safety Through Trusted Inference: Verifiable Belief-Space Neural Safety Filters for Assured Interactive Robotics",
          "summary": "Autonomous robots that interact with people must make safe and efficient decisions under human-induced uncertainty, such as their preferences, goals, competency, and willingness to cooperate. Safety filters are a popular approach for ensuring safety in interactive robotics, since their modular design separates safety from performance, al…",
          "summaryRaw": "Autonomous robots that interact with people must make safe and efficient decisions under human-induced uncertainty, such as their preferences, goals, competency, and willingness to cooperate. Safety filters are a popular approach for ensuring safety in interactive robotics, since their modular design separates safety from performance, allowing robots to operate safely around people with minimal impact on task efficiency. While traditional safety filters typically operate only in the physical space, neglecting the robot's ability to learn and adapt online, the recently proposed belief-space safety filter (BeliefSF) reasons about robot safety in closed-loop with runtime inference that actively reduces the robot's uncertainty online, thereby reducing conservativeness in filtering. However, providing formal safety guarantees for robots deploying BeliefSF remains a significant challenge due to errors in runtime inference and neural approximation of safety filters required to handle the high dimensionality of belief spaces. In this paper, we propose an algorithmic approach to certify high-probability safety of BeliefSF using conformal prediction, while explicitly accounting for the reliability of the robot's runtime inference module. Our method leverages the structure of belief-space safety filtering by focusing verification on a region where inference is expected to be reliable. It preserves the simplicity and sample complexity of standard conformal prediction, yet can certify a substantially less conservative safety filter. Through a simulated human-vehicle interaction benchmark, we show that our approach verifies a significantly more permissive belief-space safety filter than a standard conformal prediction baseline.",
          "link": "https://arxiv.org/abs/2606.02562v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02562v1",
          "published": "2026-06-01T17:54:00Z",
          "updated": "2026-06-01T17:54:00Z",
          "authors": [
            "Haimin Hu"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "score": 49,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦机器人、新基准，适合纳入今日重点关注。",
          "whyImportant": "命中机器人、新基准主题，分类覆盖cs.AI / cs.LG，且发布时间较新。",
          "reasonTags": [
            "机器人",
            "新基准"
          ]
        },
        {
          "id": "2606.01788v1",
          "title": "PlatonicNav: Unveiling Semantic Correspondence in Navigation with Platonic Topological Maps",
          "summary": "Embodied visual navigation, where an agent perceives a complex environment and acts to reach a goal from raw sensory input, underpins a wide range of applications such as household service robotics, assistive robotics, and large-scale autonomous exploration. To address these challenges, we extend the Platonic Representation Hypothesis to…",
          "summaryRaw": "Embodied visual navigation, where an agent perceives a complex environment and acts to reach a goal from raw sensory input, underpins a wide range of applications such as household service robotics, assistive robotics, and large-scale autonomous exploration. However, recent attempts to unify vision-and-language navigation (VLN) and object goal navigation (ObjNav) remain at the level of architectural fusion, mixed-task training, and large vision-language pretraining, without examining whether independently trained vision and language encoders may already share a common semantic structure. Moreover, even object-centric topological maps still ground language goals through explicit cross-modal supervision such as CLIP or large vision-language models, leaving open whether such grounding is possible from a purely vision-built map. To address these challenges, we extend the Platonic Representation Hypothesis to embodied navigation and recast vision-only ObjNav, cross-modal ObjNav, and VLN as three different interfaces to the same object-centric semantic manifold. We further introduce PlatonicNav, a training-free framework whose Platonic Topological Map fuses geometric and semantic node distances from a self-supervised visual encoder, and grounds language goals via blind matching without any paired vision-language data. Extensive experiments on simulation benchmarks including HM3D-IIN, OVON, and R2R-CE on MP3D, together with deployment on Unitree Go2, demonstrate that PlatonicNav generalizes across tasks, modalities, and embodiments without explicit cross-modal training. Code: https://github.com/AIGeeksGroup/PlatonicNav. Website: https://aigeeksgroup.github.io/PlatonicNav.",
          "link": "https://arxiv.org/abs/2606.01788v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01788v1",
          "published": "2026-06-01T07:08:50Z",
          "updated": "2026-06-01T07:08:50Z",
          "authors": [
            "Junlin Long",
            "Zeyu Zhang",
            "Xu Deng",
            "Yiran Wang",
            "Yue Yang",
            "Luke Borgnolo",
            "Maxwell Twelftree",
            "Yang Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 49,
          "importanceLevel": "S",
          "oneSentenceSummary": "该论文聚焦机器人、新基准，适合纳入今日重点关注。",
          "whyImportant": "命中机器人、新基准、通用框架主题，分类覆盖cs.CV，且发布时间较新。",
          "reasonTags": [
            "机器人",
            "新基准",
            "通用框架"
          ]
        }
      ]
    },
    {
      "dateKey": "20260601",
      "dateLabel": "2026-06-01",
      "generatedAt": "2026-06-01T15:56:56.304001+00:00",
      "paperCount": 20,
      "papers": [
        {
          "id": "2605.30280v1",
          "title": "Qwen-VLA: Unifying Vision-Language-Action Modeling across Tasks, Environments, and Robot Embodiments",
          "summary": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
          "link": "https://arxiv.org/abs/2605.30280v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30280v1",
          "published": "2026-05-28T17:36:31Z",
          "updated": "2026-05-28T17:36:31Z",
          "authors": [
            "Qiuyue Wang",
            "Mingsheng Li",
            "Jian Guan",
            "Jinhui Ye",
            "Sicheng Xie",
            "Yitao Liu",
            "Junhao Chen",
            "Zhixuan Liang"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 96
        },
        {
          "id": "2605.25829v1",
          "title": "OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation",
          "summary": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
          "link": "https://arxiv.org/abs/2605.25829v1",
          "pdfLink": "https://arxiv.org/pdf/2605.25829v1",
          "published": "2026-05-25T13:28:33Z",
          "updated": "2026-05-25T13:28:33Z",
          "authors": [
            "Xinzhe Chen",
            "Sihua Ren",
            "Liqi Huang",
            "Haowen Sun",
            "Mingyang Li",
            "Xingyu Chen",
            "Zeyang Liu",
            "Xuguang Lan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 80
        },
        {
          "id": "2605.30484v1",
          "title": "ELAN4D: Embodiment-Centric 4D Supervision for Vision-Language-Action Models via Plug-and-Play Adaptation",
          "summary": "Vision-Language-Action (VLA) models have shown promise for robotic manipulation, yet most existing policies operate reactively by directly regressing actions from current observations, without explicitly modeling future dynamics. Extensive experiments on LIBERO, LIBERO-Plus, RoboTwin2.0 and real-world manipulation tasks demonstrate that…",
          "link": "https://arxiv.org/abs/2605.30484v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30484v1",
          "published": "2026-05-28T19:03:30Z",
          "updated": "2026-05-28T19:03:30Z",
          "authors": [
            "Zeyuan He",
            "Bowen Yang",
            "Zhirui Fang",
            "Keru Zhou",
            "Lei Jiang",
            "Jingjing Qian",
            "Fan Mo",
            "Junchi Yan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 72
        },
        {
          "id": "2605.29114v1",
          "title": "ReasonBreak: Probing Vulnerabilities in Reasoning-Enabled Vision-Language-Action Models for Autonomous Driving",
          "summary": "Vision-Language-Action (VLA) models with integrated reasoning have been proposed for end-to-end autonomous driving, assuming a tight coupling between reasoning and trajectory generation. Our results highlight the need for rigorous evaluation and improved defenses to ensure the safety of reasoning-enabled VLA systems in autonomous driving.",
          "link": "https://arxiv.org/abs/2605.29114v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29114v1",
          "published": "2026-05-27T21:21:37Z",
          "updated": "2026-05-27T21:21:37Z",
          "authors": [
            "Mohammadreza Teymoorianfard",
            "Jean-Philippe Monteuuis",
            "Jonathan Petit",
            "Amir Houmansadr"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 71
        },
        {
          "id": "2605.31041v1",
          "title": "Does Visual Information Play a Decisive Role in Vision-Language-Action Model Driving Behavior?",
          "summary": "Vision-Language-Action (VLA) models have demonstrated promising capability in autonomous driving, highlighting the potential of unified multimodal architectures for jointly modeling perception and planning. However, how current VLA-based driving behavior is grounded in visual information remains poorly understood.",
          "link": "https://arxiv.org/abs/2605.31041v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31041v1",
          "published": "2026-05-29T09:18:32Z",
          "updated": "2026-05-29T09:18:32Z",
          "authors": [
            "Jingtao He",
            "Hongliang Lu",
            "Xiaoyun Qiu",
            "Yixuan Wang",
            "Xinhu Zheng"
          ],
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "score": 69
        },
        {
          "id": "2605.31234v1",
          "title": "HARP-VLA: Human-Robot Aligned Representation Learning for Vision-Language-Action Model",
          "summary": "Learning generalizable vision-language-action (VLA) models from large-scale human videos is promising but challenging due to cross-embodiment discrepancies in both visual observations and executable actions. The learned aligned vision encoder and latent action model provide a unified vision and action representation for VLA-style policy…",
          "link": "https://arxiv.org/abs/2605.31234v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31234v1",
          "published": "2026-05-29T12:36:30Z",
          "updated": "2026-05-29T12:36:30Z",
          "authors": [
            "Xiang Zhu",
            "Puzhen Yuan",
            "Yichen Liu",
            "Jianyu Chen"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 68
        },
        {
          "id": "2605.30877v1",
          "title": "Wall-OSS-0.5 Technical Report",
          "summary": "Large-scale Vision-Language-Action (VLA) pretraining is increasingly adopted as the foundation for robot policies, yet the evidence for pretrained VLAs is almost invariably reported after task-specific fine-tuning.This leaves a foundational question unanswered: does VLA pretraining itself yield executable robot behavior, or does it merel…",
          "link": "https://arxiv.org/abs/2605.30877v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30877v1",
          "published": "2026-05-29T06:04:03Z",
          "updated": "2026-05-29T06:04:03Z",
          "authors": [
            "Ryan Yu",
            "Pushi Zhang",
            "Starrick Liu",
            "Brae Liu",
            "Miracle Kang",
            "Shalfun Li",
            "Lights Shi",
            "Ellie Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 67
        },
        {
          "id": "2605.30795v1",
          "title": "Feat2Go: Visual Feature-Grounded Value Estimation for Embodied Reinforcement Learning",
          "summary": "Reinforcement learning is a promising approach for improving the capabilities of vision-language-action (VLA) models while avoiding the heavy data requirements of imitation learning. Extensive experiments on ManiSkill3 and RoboTwin 2.0 demonstrate that Feat2Go consistently improves the performance of existing VLA models under both single…",
          "link": "https://arxiv.org/abs/2605.30795v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30795v1",
          "published": "2026-05-29T03:36:33Z",
          "updated": "2026-05-29T03:36:33Z",
          "authors": [
            "Junyang Shu",
            "Zhiwei Lin",
            "Bingqing Wei",
            "Yongtao Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 66
        },
        {
          "id": "2605.30282v1",
          "title": "Gaze2Act: Gaze-Conditioned Vision-Language-Action Policies for Interactive Robot Manipulation",
          "summary": "Vision-Language-Action (VLA) models have recently shown strong potential for robot learning by following language instructions. To address this limitation, we propose Gaze2Act, a novel VLA framework that leverages human gaze as a dynamic and intuitive intent signal for complex interactive manipulation.",
          "link": "https://arxiv.org/abs/2605.30282v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30282v1",
          "published": "2026-05-28T17:37:16Z",
          "updated": "2026-05-28T17:37:16Z",
          "authors": [
            "Kuangji Zuo",
            "Gen Li",
            "Bofan Lyu",
            "Yanshuo Lu",
            "Boyu Ma",
            "Shijia Han",
            "Xinyu Zhou",
            "Xichen Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 62
        },
        {
          "id": "2605.30226v1",
          "title": "BORA: Bridging Offline Reinforcement Learning and Online Residual Adaptation for Real-World Dexterous VLA Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
          "link": "https://arxiv.org/abs/2605.30226v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30226v1",
          "published": "2026-05-28T16:57:47Z",
          "updated": "2026-05-28T16:57:47Z",
          "authors": [
            "Zhongxi Chen",
            "Yifan Han",
            "Yanming Shao",
            "Huanming Liu",
            "Congsheng Xu",
            "Xiaoyu Chen",
            "Yao Mu",
            "Wenzhao Lian"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 62
        },
        {
          "id": "2605.31196v1",
          "title": "Probing Collision Grounding in Vision-Language Models for Safe Human-Robot Collaboration",
          "summary": "Safe human--robot collaboration requires more than visual description: a monitor must determine whether the robot body is safely separated, already colliding with the scene or a person, or about to collide. Across three frontier or robotics-oriented VLMs and nine visual representations, current models remain far from reliable: the best a…",
          "link": "https://arxiv.org/abs/2605.31196v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31196v1",
          "published": "2026-05-29T12:04:38Z",
          "updated": "2026-05-29T12:04:38Z",
          "authors": [
            "Jun Wang",
            "Xiaohao Xu",
            "Xiaonan Huang"
          ],
          "categories": [
            "cs.AI",
            "cs.CV",
            "cs.RO"
          ],
          "score": 60
        },
        {
          "id": "2605.30834v1",
          "title": "Hide-and-Seek in Trajectories: Discovering Failure Signals for VLA Runtime Monitoring",
          "summary": "Vision-Language-Action (VLA) models enable robots to follow natural language instructions and generalize across diverse tasks, but they remain vulnerable to execution failures that compromise reliability in real-world deployment. We evaluate Hide-and-Seek on LIBERO, VLABench, and a real-world robotic platform across three representative…",
          "link": "https://arxiv.org/abs/2605.30834v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30834v1",
          "published": "2026-05-29T04:40:12Z",
          "updated": "2026-05-29T04:40:12Z",
          "authors": [
            "Seongheon Park",
            "Wendi Li",
            "Changdae Oh",
            "Samuel Yeh",
            "Zsolt Kira",
            "Michael Hagenow",
            "Sharon Li"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.31286v1",
          "title": "DeMaVLA: A Vision-Language-Action Foundation Model for Generalizable Deformable Manipulation",
          "summary": "Real-world household robots require Vision-Language-Action (VLA) foundation models that can acquire reusable manipulation skills across diverse objects, task conditions, and household environments. Experiments show that DeMaVLA achieves competitive performance on RoboTwin and strong real-world results on our household folding benchmark.",
          "link": "https://arxiv.org/abs/2605.31286v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31286v1",
          "published": "2026-05-29T13:20:08Z",
          "updated": "2026-05-29T13:20:08Z",
          "authors": [
            "Taiyi Su",
            "Jian Zhu",
            "Tianjian Wang",
            "Youzhang He",
            "Zitai Huang",
            "Jianjun Zhang",
            "Chong Ma",
            "Hanyang Wang"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 58
        },
        {
          "id": "2605.31271v1",
          "title": "DriveMA: Driving Vision-Language-Action Models with verifiable Meta-Actions",
          "summary": "Driving Vision-Language-Action Models (Driving VLAs) aim to use language to improve end-to-end planning, but the language-action gap limits this promise. We propose DriveMA, a Driving VLA framework built on verifiable meta-actions, which summarize future ego motion into compact language-domain intentions and can be constructed from exper…",
          "link": "https://arxiv.org/abs/2605.31271v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31271v1",
          "published": "2026-05-29T13:03:16Z",
          "updated": "2026-05-29T13:03:16Z",
          "authors": [
            "Weicheng Zheng",
            "Yixin Huang",
            "Qiao Sun",
            "Derun Li",
            "Hang Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 56
        },
        {
          "id": "2605.31256v1",
          "title": "Before Parc Fermé: RL-Time Pruning for Efficient Embodied LLMs in Autonomous Driving",
          "summary": "Embodied Large Language Models (LLMs) are increasingly used as reasoning modules in robotic control pipelines to improve human-robot interaction, but their memory and generation latency make real-time deployment difficult. On the Jetson AGX Orin mounted on the target robotic platform, the compact models improve decode throughput by up to…",
          "link": "https://arxiv.org/abs/2605.31256v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31256v1",
          "published": "2026-05-29T12:53:33Z",
          "updated": "2026-05-29T12:53:33Z",
          "authors": [
            "Luca Benfenati",
            "Ali Azimi",
            "Matteo Risso",
            "Fabio Carapellese",
            "Daniele Jahier Pagliari",
            "Alessio Burrello"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 56
        },
        {
          "id": "2605.31119v1",
          "title": "Don't Fool Me Twice: Adapting to Adversity in the Wild with Experience-Driven Reasoning",
          "summary": "In robotics, dangers and adversity modes are often embodiment-specific and relative to each agent. A frontier of autonomous mobile robotics is to enable agents to operate effectively in the wild in unseen unstructured environments.",
          "link": "https://arxiv.org/abs/2605.31119v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31119v1",
          "published": "2026-05-29T10:30:02Z",
          "updated": "2026-05-29T10:30:02Z",
          "authors": [
            "Navin Sriram Ravie",
            "Andrew Jong",
            "Krrish Jain",
            "John Liu",
            "Omar Alama",
            "Bijo Sebastian",
            "Sebastian Scherer"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 51
        },
        {
          "id": "2605.30328v1",
          "title": "Supercharging Thermal Gaussian Splatting with Depth Estimation",
          "summary": "Efficient and robust 3D scene representation is crucial in autonomous driving, robotics, and related fields. While RGB images provide valuable content for 3D reconstruction, other modalities like thermal or depth can enable additional information on the environment.",
          "link": "https://arxiv.org/abs/2605.30328v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30328v1",
          "published": "2026-05-28T17:57:35Z",
          "updated": "2026-05-28T17:57:35Z",
          "authors": [
            "Manoj Biswanath",
            "Chenxin Cai",
            "Hannah Schieber",
            "Daniel Roth",
            "Benjamin Busam"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 51
        },
        {
          "id": "2605.30740v1",
          "title": "GSAM: A Generalizable and Safe Robotic Framework for Articulated Object Manipulation",
          "summary": "Articulated object manipulation is a unique challenge for service robots. To address this, we propose GSAM, a generalizable and safe robotic framework for articulated object manipulation.",
          "link": "https://arxiv.org/abs/2605.30740v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30740v1",
          "published": "2026-05-29T02:09:17Z",
          "updated": "2026-05-29T02:09:17Z",
          "authors": [
            "Beichen Shao",
            "Mengying Xie",
            "Heng Su",
            "Wanyi Zhang",
            "Mingyan Li",
            "Yan Ding",
            "Fausto Giunchiglia",
            "Chao Chen"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 50
        },
        {
          "id": "2605.27947v1",
          "title": "SANTS: A State-Adaptive Scheduler for World Action Models",
          "summary": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
          "link": "https://arxiv.org/abs/2605.27947v1",
          "pdfLink": "https://arxiv.org/pdf/2605.27947v1",
          "published": "2026-05-27T04:40:48Z",
          "updated": "2026-05-27T04:40:48Z",
          "authors": [
            "Yirui Sun",
            "Guangyu Zhuge",
            "Keliang Liu",
            "Jie Gu",
            "Xinyu Bing",
            "Zhongxue Gan",
            "Chunxu Tian"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 50
        },
        {
          "id": "2605.31352v1",
          "title": "Haptic Sorter: A Unified Planning Framework for Online Shape Estimation and Real-Time Pose Inference",
          "summary": "Robotics manipulation usually assumes that the shape and pose of the object are known to the robot prior to motion planning. In this work, we propose a unified model-based geometric framework integrating robotic haptic perception, modeling, and manipulation planning.",
          "link": "https://arxiv.org/abs/2605.31352v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31352v1",
          "published": "2026-05-29T14:28:42Z",
          "updated": "2026-05-29T14:28:42Z",
          "authors": [
            "Zhuoyi Lu",
            "Lin Yang",
            "Sri Harsha Turlapati",
            "Domenico Campolo"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 49
        }
      ]
    },
    {
      "dateKey": "20260531",
      "dateLabel": "2026-05-31",
      "generatedAt": "2026-05-31T15:08:03.198820+00:00",
      "paperCount": 20,
      "papers": [
        {
          "id": "2605.30280v1",
          "title": "Qwen-VLA: Unifying Vision-Language-Action Modeling across Tasks, Environments, and Robot Embodiments",
          "summary": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
          "link": "https://arxiv.org/abs/2605.30280v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30280v1",
          "published": "2026-05-28T17:36:31Z",
          "updated": "2026-05-28T17:36:31Z",
          "authors": [
            "Qiuyue Wang",
            "Mingsheng Li",
            "Jian Guan",
            "Jinhui Ye",
            "Sicheng Xie",
            "Yitao Liu",
            "Junhao Chen",
            "Zhixuan Liang"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 97
        },
        {
          "id": "2605.25829v1",
          "title": "OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation",
          "summary": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
          "link": "https://arxiv.org/abs/2605.25829v1",
          "pdfLink": "https://arxiv.org/pdf/2605.25829v1",
          "published": "2026-05-25T13:28:33Z",
          "updated": "2026-05-25T13:28:33Z",
          "authors": [
            "Xinzhe Chen",
            "Sihua Ren",
            "Liqi Huang",
            "Haowen Sun",
            "Mingyang Li",
            "Xingyu Chen",
            "Zeyang Liu",
            "Xuguang Lan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 80
        },
        {
          "id": "2605.29438v1",
          "title": "ElegantVLA: Learning When to Think for Efficient Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models are a powerful paradigm for generalist robotic control. However, their high computational cost and limited control frequency hinder real-time robotic manipulation, especially when large vision-language backbones and iterative action heads run at every control step.",
          "link": "https://arxiv.org/abs/2605.29438v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29438v1",
          "published": "2026-05-28T06:33:05Z",
          "updated": "2026-05-28T06:33:05Z",
          "authors": [
            "Ye Li",
            "Huanan Liu",
            "Kangye Ji",
            "Yuan Meng",
            "Jiajun Fan",
            "Yuansong Wang",
            "Shiyu Qin",
            "Chenglei Wu"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 75
        },
        {
          "id": "2605.29562v1",
          "title": "VLA-Pro: Cross-Task Procedural Memory Transfer for Vision-Language-Action Models",
          "summary": "Vision-Language-Action~(VLA) models have shown strong potential for general-purpose robotic manipulation, yet they still struggle to generalize to unseen tasks that necessitate transferring relevant experience across objects, scenes, and action patterns. Experiments on RoboTwin, RLBench, and real-world manipulation tasks show that VLA-Pr…",
          "link": "https://arxiv.org/abs/2605.29562v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29562v1",
          "published": "2026-05-28T08:14:08Z",
          "updated": "2026-05-28T08:14:08Z",
          "authors": [
            "Shengyu Si",
            "Yuanzhuo Lu",
            "Ruimeng Yang",
            "Ziyi Ye",
            "Zuxuan Wu",
            "Yu-Gang Jiang"
          ],
          "categories": [
            "cs.AI",
            "cs.CV",
            "cs.RO"
          ],
          "score": 74
        },
        {
          "id": "2605.29114v1",
          "title": "ReasonBreak: Probing Vulnerabilities in Reasoning-Enabled Vision-Language-Action Models for Autonomous Driving",
          "summary": "Vision-Language-Action (VLA) models with integrated reasoning have been proposed for end-to-end autonomous driving, assuming a tight coupling between reasoning and trajectory generation. Our results highlight the need for rigorous evaluation and improved defenses to ensure the safety of reasoning-enabled VLA systems in autonomous driving.",
          "link": "https://arxiv.org/abs/2605.29114v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29114v1",
          "published": "2026-05-27T21:21:37Z",
          "updated": "2026-05-27T21:21:37Z",
          "authors": [
            "Mohammadreza Teymoorianfard",
            "Jean-Philippe Monteuuis",
            "Jonathan Petit",
            "Amir Houmansadr"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 72
        },
        {
          "id": "2605.29416v1",
          "title": "3DVLA: Enhancing Vision-Language-Action Models via 3D Spatial and Instance Understanding",
          "summary": "Vision-Language-Action models have achieved remarkable progress in robotic manipulation, yet they suffer from a critical limitation: a lack of 3D scene understanding. We integrate 3DVLA with multiple VLA baselines and evaluate on LIBERO-Plus and RoboTwin 2.0.",
          "link": "https://arxiv.org/abs/2605.29416v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29416v1",
          "published": "2026-05-28T06:07:57Z",
          "updated": "2026-05-28T06:07:57Z",
          "authors": [
            "Zhongyu Xia",
            "Yousen Tang",
            "Bingqing Wei",
            "Yongtao Wang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 71
        },
        {
          "id": "2605.28548v1",
          "title": "GEM: Generative Supervision Helps Embodied Intelligence",
          "summary": "Embodied Vision-Language Models (VLMs) have demonstrated impressive performance and generalization in robotics, particularly within Vision-Language-Action frameworks. Furthermore, our deployed action model, GEM-VLA, exhibits vastly superior task execution abilities in both simulation environments and real-world evaluations.",
          "link": "https://arxiv.org/abs/2605.28548v1",
          "pdfLink": "https://arxiv.org/pdf/2605.28548v1",
          "published": "2026-05-27T14:39:42Z",
          "updated": "2026-05-27T14:39:42Z",
          "authors": [
            "Ruowen Zhao",
            "Bangguo Li",
            "Zuyan Liu",
            "Yinan Liang",
            "Junliang Ye",
            "Fangfu Liu",
            "Diankun Wu",
            "Zhengyi Wang"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 70
        },
        {
          "id": "2605.30282v1",
          "title": "Gaze2Act: Gaze-Conditioned Vision-Language-Action Policies for Interactive Robot Manipulation",
          "summary": "Vision-Language-Action (VLA) models have recently shown strong potential for robot learning by following language instructions. To address this limitation, we propose Gaze2Act, a novel VLA framework that leverages human gaze as a dynamic and intuitive intent signal for complex interactive manipulation.",
          "link": "https://arxiv.org/abs/2605.30282v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30282v1",
          "published": "2026-05-28T17:37:16Z",
          "updated": "2026-05-28T17:37:16Z",
          "authors": [
            "Kuangji Zuo",
            "Gen Li",
            "Bofan Lyu",
            "Yanshuo Lu",
            "Boyu Ma",
            "Shijia Han",
            "Xinyu Zhou",
            "Xichen Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 63
        },
        {
          "id": "2605.30226v1",
          "title": "BORA: Bridging Offline Reinforcement Learning and Online Residual Adaptation for Real-World Dexterous VLA Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
          "link": "https://arxiv.org/abs/2605.30226v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30226v1",
          "published": "2026-05-28T16:57:47Z",
          "updated": "2026-05-28T16:57:47Z",
          "authors": [
            "Zhongxi Chen",
            "Yifan Han",
            "Yanming Shao",
            "Huanming Liu",
            "Congsheng Xu",
            "Xiaoyu Chen",
            "Yao Mu",
            "Wenzhao Lian"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 63
        },
        {
          "id": "2605.29662v1",
          "title": "SAFE-Pruner: Semantic Attention-Guided Future-Aware Token Pruning for Efficient Vision-Language-Action Manipulation",
          "summary": "Real-time inference of vision-language-action (VLA) models is essential for robotic control. Specifically, we identify semantic attention consistency, the tendency that VLA models concentrate their attention probability mass on the same semantic entity across execution steps.",
          "link": "https://arxiv.org/abs/2605.29662v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29662v1",
          "published": "2026-05-28T09:23:08Z",
          "updated": "2026-05-28T09:23:08Z",
          "authors": [
            "Shilin Ma",
            "Chubin Zhang",
            "Changyuan Wang",
            "Yuji Wang",
            "Yue Wu",
            "Zixuan Wang",
            "Jingqi Tian",
            "Zheng Zhu"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 61
        },
        {
          "id": "2605.30350v1",
          "title": "DynaFLIP: Rethinking Robotics Perception via Tri-Modal-Dynamics Guided Representation",
          "summary": "Robot manipulation critically depends on perception that preserves the action-relevant aspects of a scene. Yet most robot learning pipelines are built upon visual encoders pre-trained for static recognition or vision-language alignment, leaving motion understanding to downstream policies.",
          "link": "https://arxiv.org/abs/2605.30350v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30350v1",
          "published": "2026-05-28T17:59:53Z",
          "updated": "2026-05-28T17:59:53Z",
          "authors": [
            "Jusuk Lee",
            "Seungjae Lee",
            "Jonghun Shin",
            "Hoseong Jung",
            "Sungha Kim",
            "Daesol Cho",
            "H. Jin Kim",
            "Jia-Bin Huang"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.29605v1",
          "title": "VLAConf: Calibrated Task-Success Confidence for Vision-Language-Action Models",
          "summary": "Confidence estimation for Vision-Language-Action (VLA) models is essential for robots to perform manipulation tasks in the open world, providing crucial signals for risk-sensitive decision-making and failure anticipation. The effectiveness of VLAConf is further validated in real-robot experiments.",
          "link": "https://arxiv.org/abs/2605.29605v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29605v1",
          "published": "2026-05-28T08:42:12Z",
          "updated": "2026-05-28T08:42:12Z",
          "authors": [
            "Dehao Huang",
            "Aoxiang Gu",
            "Chengjie Zhang",
            "Bolin Zou",
            "Wenlong Dong",
            "Zilang Cen",
            "Yue Wang",
            "Hong Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.28634v1",
          "title": "PrimitiveVLA: Learning Reusable Motion Primitives for Efficient and Generalizable Robotic Manipulation",
          "summary": "Vision-Language-Action (VLA) models offer a promising paradigm for generalist robotic policies, yet their adaptation is hindered by data inefficiency and poor generalization. We propose PrimitiveVLA, a framework that shifts this paradigm toward a Primitive-Centric Disassemble & Assemble paradigm.",
          "link": "https://arxiv.org/abs/2605.28634v1",
          "pdfLink": "https://arxiv.org/pdf/2605.28634v1",
          "published": "2026-05-27T15:41:18Z",
          "updated": "2026-05-27T15:41:18Z",
          "authors": [
            "Yutai Li",
            "Shaohui Peng",
            "Jiaming Guo",
            "Di Huang",
            "Zihao Zhang",
            "Yuxuan Guo",
            "Yunkai Gao",
            "Siming Lan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.30326v1",
          "title": "RoboWits: Unexpected Challenges for Robotic Creative Problem Solving",
          "summary": "However, current robotic benchmarks primarily emphasize skill-level execution and provide limited insight into such cognitive reasoning capabilities. We introduce RoboWits, a bi-manual robotic benchmark designed to systematically evaluate cognitive reasoning, creative tool use, and robustness to unexpected conditions.",
          "link": "https://arxiv.org/abs/2605.30326v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30326v1",
          "published": "2026-05-28T17:57:15Z",
          "updated": "2026-05-28T17:57:15Z",
          "authors": [
            "Chunru Lin",
            "Hongxin Zhang",
            "Fenghao Yu",
            "Zhehuan Chen",
            "Thomas L. Griffiths",
            "Yejin Choi",
            "David Held",
            "Chuang Gan"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 58
        },
        {
          "id": "2605.29577v1",
          "title": "Mitigating State Aliasing in Vision-Language-Action Models via Inverse Dynamics Learning",
          "summary": "Vision-Language-Action (VLA) models have emerged as a promising framework that unifies perception, reasoning, and control for robot manipulation by adapting pretrained vision-language models (VLMs) to action prediction. We further use pseudo-reversed supervision to expose the encoder to a broader range of action directions and improve ge…",
          "link": "https://arxiv.org/abs/2605.29577v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29577v1",
          "published": "2026-05-28T08:22:49Z",
          "updated": "2026-05-28T08:22:49Z",
          "authors": [
            "Kyujin Lee",
            "Injae Kim",
            "Jihwan Park",
            "Yejun Ju",
            "Minseok Joo",
            "Hyunwoo J. Kim"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 57
        },
        {
          "id": "2605.30011v1",
          "title": "VisualThink-VLA: Visual Intermediate Reasoning for Effective and Low-Latency Vision-Language-Action Policies",
          "summary": "Recent work has begun to equip vision-language-action (VLA) policies with explicit intermediate reasoning. Across multiple benchmarks and real-robot evaluation, VISUALTHINK-VLA achieves the highest success rate on most benchmarks while reducing the multi-second latency of reasoning-augmented baselines to the sub-second regime.",
          "link": "https://arxiv.org/abs/2605.30011v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30011v1",
          "published": "2026-05-28T14:36:53Z",
          "updated": "2026-05-28T14:36:53Z",
          "authors": [
            "Mingjian Gao",
            "Wenqiao Zhang",
            "Yuqian Yuan",
            "Yang Dai",
            "Binhe Yu",
            "Zheqi Lv",
            "Haoyu Zheng",
            "Jiaqi Zhu"
          ],
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "score": 55
        },
        {
          "id": "2605.28803v1",
          "title": "Ω-QVLA: Robust Quantization for Vision-Language-Action Models via Composite Rotation and Per-step Scaling",
          "summary": "Vision-Language-Action (VLA) models unify perception, reasoning, and control within a single policy, yet their multi-billion-parameter backbones and diffusion-based action heads make on-device deployment prohibitively expensive. On LIBERO, Omega-QVLA compresses Pi 0.5 and GR00T N1.5 to W4A4 with 98.0% and 87.8% task success rates, matchi…",
          "link": "https://arxiv.org/abs/2605.28803v1",
          "pdfLink": "https://arxiv.org/pdf/2605.28803v1",
          "published": "2026-05-27T17:55:01Z",
          "updated": "2026-05-27T17:55:01Z",
          "authors": [
            "Xinyu Wang",
            "Mingze Li",
            "Sicheng Lyu",
            "Dongxiu Liu",
            "Kaicheng Yang",
            "Ziyu Zhao",
            "Yufei Cui",
            "Xiao-Wen Chang"
          ],
          "categories": [
            "cs.CV",
            "cs.LG"
          ],
          "score": 54
        },
        {
          "id": "2605.30328v1",
          "title": "Supercharging Thermal Gaussian Splatting with Depth Estimation",
          "summary": "Efficient and robust 3D scene representation is crucial in autonomous driving, robotics, and related fields. While RGB images provide valuable content for 3D reconstruction, other modalities like thermal or depth can enable additional information on the environment.",
          "link": "https://arxiv.org/abs/2605.30328v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30328v1",
          "published": "2026-05-28T17:57:35Z",
          "updated": "2026-05-28T17:57:35Z",
          "authors": [
            "Manoj Biswanath",
            "Chenxin Cai",
            "Hannah Schieber",
            "Daniel Roth",
            "Benjamin Busam"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 52
        },
        {
          "id": "2605.26577v1",
          "title": "Bridging Control with Neural Network Verifier alpha-beta-CROWN: A Tutorial",
          "summary": "Learning-based methods for synthesizing controllers have gained popularity due to their high expressiveness and strong empirical performance. However, in safety-critical scenarios such as autonomous driving, robotics, and power systems, empirical performance alone is insufficient, and formal verification of controller properties such as…",
          "link": "https://arxiv.org/abs/2605.26577v1",
          "pdfLink": "https://arxiv.org/pdf/2605.26577v1",
          "published": "2026-05-26T05:49:19Z",
          "updated": "2026-05-26T05:49:19Z",
          "authors": [
            "Haoyu Li",
            "Xiangru Zhong",
            "Hao Cheng",
            "Bin Hu",
            "Huan Zhang"
          ],
          "categories": [
            "cs.AI",
            "cs.LG"
          ],
          "score": 51
        },
        {
          "id": "2605.27947v1",
          "title": "SANTS: A State-Adaptive Scheduler for World Action Models",
          "summary": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
          "link": "https://arxiv.org/abs/2605.27947v1",
          "pdfLink": "https://arxiv.org/pdf/2605.27947v1",
          "published": "2026-05-27T04:40:48Z",
          "updated": "2026-05-27T04:40:48Z",
          "authors": [
            "Yirui Sun",
            "Guangyu Zhuge",
            "Keliang Liu",
            "Jie Gu",
            "Xinyu Bing",
            "Zhongxue Gan",
            "Chunxu Tian"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 50
        }
      ]
    }
  ]
};
