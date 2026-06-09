window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-09T02:37:27.536932+00:00",
  "description": "按北京时间每天 08:00 的固定批次归档，保留左侧历史日期归档，并使用 DeepSeek 生成精简中文摘要。",
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
  "boardOrder": [
    "overall",
    "vla",
    "wam"
  ],
  "boardLabels": {
    "overall": "总榜",
    "vla": "VLA 榜",
    "wam": "WAM 榜"
  },
  "scoreDimensions": {
    "relevance": "与 VLA/WAM/机器人/自动驾驶核心主题的相关程度",
    "novelty": "是否包含新任务、新模型、新基准或新训练范式",
    "impact": "是否具备基础性、统一性或潜在高影响力",
    "practicality": "是否有真实场景、真实机器人/驾驶或较强落地信号",
    "coreAlignment": "是否属于你最关心的 VLA 或 WAM 主航道工作"
  },
  "selectionMethod": "deepseek_research_assistant",
  "modelInfo": {
    "provider": "deepseek",
    "model": "deepseek-v4-pro",
    "candidateCount": 45
  },
  "batchWindow": {
    "start": "2026-06-08T08:00:00+08:00",
    "end": "2026-06-09T08:00:00+08:00"
  },
  "currentDateKey": "20260609",
  "papers": [
    {
      "id": "2606.09572v1",
      "title": "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control",
      "summary": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient tas…",
      "summaryRaw": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient task-conditioned visuomotor control. CT-VAM acts as a compact local execution policy that predicts action chunks from dualview visual observations, proprioception, and a lightweight task condition, potentially enabling a practical cloud-edge paradigm in which high-level semantic reasoning can be handled by large models while fast closed-loop control runs on local hardware. To fuse heterogeneous inputs effectively, CT-VAM introduces TARS (Thalamic Action Routing Stream), a stream-separated conditional attention decoder that independently routes action, visual and task streams, preventing dense sensory tokens from overwhelming compact task-relevant conditions. With only 68M parameters, CT-VAM achieves LIBERO success rates competitive with substantially larger VLA models, while reducing inference latency. Together with flow-consistent inpainting for asynchronous chunk execution, CT-VAM supports high-frequency control and demonstrates robust realworld deployment on resource-constrained robotic platforms.",
      "link": "https://arxiv.org/abs/2606.09572v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09572v1",
      "published": "2026-06-08T14:46:43Z",
      "updated": "2026-06-08T14:46:43Z",
      "authors": [
        "Jiacheng Li",
        "Yize Guo",
        "Jiabin Guo",
        "Qingchen Liu",
        "Jiahu Qin"
      ],
      "categories": [
        "cs.AI",
        "cs.RO"
      ],
      "score": 95,
      "importanceLevel": "S",
      "lane": "VLA",
      "dimensionScores": {
        "relevance": 95,
        "novelty": 93,
        "impact": 88,
        "practicality": 90,
        "coreAlignment": 96
      },
      "oneSentenceSummary": "受小脑-丘脑启发的视觉动作模型，实现高效任务条件视觉运动控制。",
      "summaryCn": "提出CT-VAM，通过双视图视觉、本体感知和轻量级任务条件预测动作块。引入TARS流分离条件注意力解码器，独立路由动作、视觉和本体感知token。支持云端大模型高层推理与本地快速闭环控制协同。",
      "whyImportant": "实现高效视觉运动控制，分离高层推理与低频执行，推动云端-边缘架构。",
      "reasonTags": [
        "视觉动作模型",
        "端侧高效推理",
        "小脑-丘脑启发"
      ],
      "innovationPoints": [
        "小脑-丘脑启发式架构解耦任务意图与实时控制",
        "TARS流分离条件注意力，独立路由多模态输入",
        "轻量级本地策略支持高频闭环控制"
      ],
      "noveltyVerdict": "架构新颖，将生物启发引入VLA，分离推理与控制。",
      "duplicateRisk": "low",
      "dedupeNote": "首次从神经科学角度设计VLA解耦架构。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control"
      ]
    },
    {
      "id": "2606.09215v1",
      "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
      "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a h…",
      "summaryRaw": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces and reducing the legs to balance-preserving locomotion. We present MotionWAM, a real-time WAM that drives autonomous humanoid loco-manipulation from a single egocentric camera by conditioning the policy on the intermediate denoising features of a video world model. MotionWAM replaces the upper-lower split with a unified motion latent and predicts whole-body motion tokens that jointly cover locomotion, torso motion, height regulation, foot interaction, and hand manipulation in a single action space. A three-stage learning framework progressively adapts the video world model to egocentric visual dynamics and to the target humanoid embodiment. On nine real-world Unitree G1 tasks, MotionWAM runs in real time, substantially outperforms Vision-Language-Action (VLA) baselines fine-tuned on the same demonstrations by over 30% in overall success rate, and executes task-driven foot interaction that decoupled upper-lower policies cannot reach. Our results suggest that video-pretrained WAMs can be lifted from tabletop manipulation to coordinated, human-like whole-body humanoid control.",
      "link": "https://arxiv.org/abs/2606.09215v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
      "published": "2026-06-08T08:50:14Z",
      "updated": "2026-06-08T08:50:14Z",
      "authors": [
        "Jia Zheng",
        "Teli Ma",
        "Yudong Fan",
        "Zifan Wang",
        "Shuo Yang",
        "Junwei Liang"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 95,
      "importanceLevel": "S",
      "lane": "Both",
      "dimensionScores": {
        "relevance": 92,
        "novelty": 90,
        "impact": 88,
        "practicality": 80,
        "coreAlignment": 94
      },
      "oneSentenceSummary": "实时世界动作模型驱动人形机器人全身移动操作。",
      "summaryCn": "提出MotionWAM，从单目相机实时驱动人形移动操作。用统一运动潜变量取代上下半身分割，预测全身运动token，并利用视频世界模型的中间去噪特征条件化策略，实现实时性。",
      "whyImportant": "首次实现实时世界动作模型用于人形机器人，提升全身协调。",
      "reasonTags": [
        "世界动作模型",
        "人形机器人",
        "实时控制"
      ],
      "innovationPoints": [
        "实时WAM通过统一运动潜变量实现全身协调",
        "条件化策略于去噪特征，避免高维扩散延迟",
        "端到端单目驱动移动操作"
      ],
      "noveltyVerdict": "突破WAM实时性瓶颈，针对高自由度人形机器人。",
      "duplicateRisk": "low",
      "dedupeNote": "专注人形全身移动操作，不同于桌面操作WAM。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core",
        "wam_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation"
      ]
    },
    {
      "id": "2606.09009v1",
      "title": "Scaling by Diversified Experience for Vision-Language-Action Models",
      "summary": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences.",
      "summaryRaw": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences. We propose an Intention Decoupling algorithm to isolate control-relevant features from reasoning contexts and a similar-sample guided RL pipeline to stabilize policy updates and mitigate distribution shift. Extensive experiments on real-world robotic tasks and multi-modal benchmarks demonstrate that SyVLA achieves superior task success rates and stronger out-of-distribution generalization compared to existing methods, while effectively preserving core vision-language capabilities. Codes and Datasets is released on \\href{https://sy-vla.github.io/}{project page}.",
      "link": "https://arxiv.org/abs/2606.09009v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09009v1",
      "published": "2026-06-08T04:13:38Z",
      "updated": "2026-06-08T04:13:38Z",
      "authors": [
        "Leiyu Wang",
        "Zhaofengnian Wang",
        "Xueqi Li",
        "Luoyi Fan",
        "Cewu Lu",
        "Nanyang Ye"
      ],
      "categories": [
        "cs.CV"
      ],
      "score": 94,
      "importanceLevel": "S",
      "lane": "VLA",
      "dimensionScores": {
        "relevance": 90,
        "novelty": 91,
        "impact": 85,
        "practicality": 82,
        "coreAlignment": 92
      },
      "oneSentenceSummary": "通过多样化经验训练鲁棒VLA模型，解耦意图与稳定策略优化。",
      "summaryCn": "提出SyVLA，利用多样化经验和意图解耦算法隔离控制相关特征，以及相似样本引导的RL管道稳定策略更新。在真实机器人任务和多模态基准上展示优越泛化能力。",
      "whyImportant": "解决VLA高层推理与低层控制纠缠，提升分布外泛化。",
      "reasonTags": [
        "多样化经验",
        "意图解耦",
        "鲁棒VLA"
      ],
      "innovationPoints": [
        "意图解耦算法隔离推理与控制特征",
        "相似样本引导RL稳定训练，缓解分布偏移"
      ],
      "noveltyVerdict": "在VLA训练策略上创新，有效提升鲁棒性。",
      "duplicateRisk": "low",
      "dedupeNote": "将意图解耦与RL稳定化结合，区别于纯模仿学习。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Scaling by Diversified Experience for Vision-Language-Action Models"
      ]
    },
    {
      "id": "2606.09416v1",
      "title": "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer",
      "summary": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named.",
      "summaryRaw": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named. Recent language-agent work names this layer the harness, the external system that mediates tools, manages state, bounds resources, and records execution. The robotics community has not yet adopted this framing, and we propose that robot middleware is that harness. A Physical AI harness differs from a software harness in where it intervenes. A software harness mediates at tool-call boundaries. A Physical AI harness must mediate at control, computing, and communication simultaneously, because a learned policy's output crosses all three: its commands shift the trajectory, its inference time shifts the schedule, and its payload shifts the bandwidth. Robot middleware is the lowest robot-stack layer with mediating abstractions over all three, so it is best positioned to compose their enforcement. It already provides most of what a harness needs but lacks the enforcement for an AI model. We name this missing enforcement as three functions: Projection gates each output at emission, Isolation bounds the model's execution and transmission slot, and Transfer falls back to a verified baseline when checks fail. Each appears today as hand-built application code in deployed robot systems, built on surfaces robot middleware already provides. Robot middleware should host them not as the best single-axis enforcer but as the layer that composes all three. We sketch this as a ROS 2 Harness Profile, a deployment artifact that carries an AI model's declared output region, inference budget, and operating regime while the middleware enforces them across ROS 2, DDS, and Zenoh.",
      "link": "https://arxiv.org/abs/2606.09416v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09416v1",
      "published": "2026-06-08T12:29:54Z",
      "updated": "2026-06-08T12:29:54Z",
      "authors": [
        "Sanghoon Lee",
        "Jiyeong Chae",
        "Kyung-Joon Park"
      ],
      "categories": [
        "cs.AI",
        "cs.RO"
      ],
      "score": 85,
      "importanceLevel": "A",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 80,
        "novelty": 75,
        "impact": 80,
        "practicality": 90,
        "coreAlignment": 70
      },
      "oneSentenceSummary": "机器人中间件作为物理AI的线束层，整合VLA策略与系统资源管理。",
      "summaryCn": "提出机器人中间件是物理AI的线束层，不同于软件线束在工具调用边界介入，物理AI线束需同时媒介控制、计算与通信。为VLA模型提供确定性时序与资源管理。",
      "whyImportant": "明确物理AI部署的工程框架，促进VLA模型可靠集成。",
      "reasonTags": [
        "中间件",
        "物理AI",
        "线束工程"
      ],
      "innovationPoints": [
        "提出物理AI线束概念，区分于软件线束",
        "强调同步控制、计算与通信的需求"
      ],
      "noveltyVerdict": "命名并框架化机器人在物理AI时代的新角色。",
      "duplicateRisk": "medium",
      "dedupeNote": "非VLA模型创新，而是系统集成框架。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer"
      ]
    },
    {
      "id": "2606.09337v1",
      "title": "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation",
      "summary": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies.",
      "summaryRaw": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies. When contact conditions shift from the training distribution, the policy cannot perform online adaptation, leading to problems such as inappropriate contact forces and inefficient retries. Therefore, we propose TORL-VLA, a tactile-guided online reinforcement learning framework that couples tactile feedback with policy refinement for contact-rich manipulation. Our method introduces a tactile-derived wrench-aware VLA to predict reference actions and future wrench sequences, while a lightweight online RL module is used to refine the reference actions. To stabilize learning from mixed exploratory policy-generated and human-intervention data, we introduce an intervention-censored critic that prevents post-intervention success from being wrongly credited to policy-generated actions preceding intervention. Real-robot experiments on long-horizon contact-rich tasks, including latch manipulation, coffee-cup placement, and egg handling, show that TORL-VLA improves success rates at both subtask and full-task levels, as well as time-bounded execution efficiency over strong baselines.",
      "link": "https://arxiv.org/abs/2606.09337v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09337v1",
      "published": "2026-06-08T11:05:05Z",
      "updated": "2026-06-08T11:05:05Z",
      "authors": [
        "Huaihang Zheng",
        "Yi Yang",
        "Kai Ma",
        "Shenglin Xu",
        "Tian Xie",
        "Guozheng Li",
        "Xiangyu Wang",
        "Yiren Ma"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 85,
      "importanceLevel": "A",
      "lane": "VLA",
      "dimensionScores": {
        "relevance": 88,
        "novelty": 80,
        "impact": 75,
        "practicality": 78,
        "coreAlignment": 86
      },
      "oneSentenceSummary": "触觉引导在线强化学习用于接触丰富操作的VLA。",
      "summaryCn": "提出TORL-VLA，结合触觉衍生力觉感知VLA预测参考动作和未来力序列，并用轻量在线RL模块优化参考动作。通过混合探索策略和在线学习稳定训练。",
      "whyImportant": "引入触觉反馈在线RL，提升VLA在接触任务中的适应能力。",
      "reasonTags": [
        "触觉反馈",
        "在线RL",
        "接触丰富操作"
      ],
      "innovationPoints": [
        "触觉-力觉感知VLA预测动作和力序列",
        "在线RL模块在部署时微调策略"
      ],
      "noveltyVerdict": "将触觉与在线RL融入VLA，增强接触任务鲁棒性。",
      "duplicateRisk": "medium",
      "dedupeNote": "区别于离线VLA，专注在线RL细调，触觉信息驱动。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation"
      ]
    },
    {
      "id": "2606.08962v1",
      "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
      "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive.",
      "summaryRaw": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process. Existing acceleration methods reduce this cost by caching and reusing computation within a single chunk's denoising trajectory. Our empirical analysis reveals a substantial source of redundancy they overlook: redundancy across chunks. When a robot executes a smooth behavior, the residuals computed at a given denoising step are strongly correlated from one chunk to the next. We introduce C$^3$ache, a training-free method that caches and reuses these residuals across inference chunks at the same denoising step. Experiments on benchmarks with a Fast-WAM backbone show that C$^3$ache achieves up to a $2.5\\times$ speedup in total wall-clock inference time, with negligible degradation in task success rate.",
      "link": "https://arxiv.org/abs/2606.08962v1",
      "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
      "published": "2026-06-08T03:01:10Z",
      "updated": "2026-06-08T03:01:10Z",
      "authors": [
        "Weisen Zhao",
        "Lam Nguyen",
        "Zhicong Lu",
        "Yuzhang Shang"
      ],
      "categories": [
        "cs.CV",
        "cs.LG",
        "cs.RO"
      ],
      "score": 82,
      "importanceLevel": "A",
      "lane": "Both",
      "dimensionScores": {
        "relevance": 85,
        "novelty": 85,
        "impact": 78,
        "practicality": 88,
        "coreAlignment": 86
      },
      "oneSentenceSummary": "跨推理块缓存加速世界动作模型推理。",
      "summaryCn": "提出C3ache，利用世界动作模型多推理块之间的残差相关性，缓存并复用跨块残差，无需训练即可加速推理，弥补现有方法只重用单块内去噪计算的不足。",
      "whyImportant": "首次利用跨块冗余加速WAM，提高实时性。",
      "reasonTags": [
        "推理加速",
        "世界动作模型",
        "跨块缓存"
      ],
      "innovationPoints": [
        "发现并利用跨块残差相关性实现缓存",
        "训练-free方法，即插即用"
      ],
      "noveltyVerdict": "新颖的跨块缓存策略，显著降低WAM延迟。",
      "duplicateRisk": "low",
      "dedupeNote": "不同于单块内缓存加速，开创跨块冗余利用。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core",
        "wam_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache"
      ]
    },
    {
      "id": "2606.09630v1",
      "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
      "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer t…",
      "summaryRaw": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses it as a semantic reward selector: it predicts a recovery descriptor and reward mask for in-simulation residual-policy training, followed by zero-shot sim-to-real deployment of the trained recovery policies. This decouples high-level failure understanding from low-level corrective control to support different VLAs. Experiments across short-horizon, long-horizon, and contact-rich manipulation tasks show that ReCoVLA outperforms the tested baselines on average. In simulation, our reward compiler improves average success from 36.7% for the fine-tuned $π_{0.5}$ baseline to 66.7%. In physical zero-shot sim-to-real experiments, ReCoVLA achieves the best average performance, with 61.7% success.",
      "link": "https://arxiv.org/abs/2606.09630v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
      "published": "2026-06-08T15:29:09Z",
      "updated": "2026-06-08T15:29:09Z",
      "authors": [
        "Haodi Hu",
        "Chung-Ta Huang",
        "Jing Liu",
        "Ye Wang",
        "Kei Suzuki",
        "Matthew Brand",
        "Toshiaki Koike-Akino"
      ],
      "categories": [
        "cs.AI",
        "cs.LG",
        "cs.RO"
      ],
      "score": 82,
      "importanceLevel": "A",
      "lane": "VLA",
      "dimensionScores": {
        "relevance": 85,
        "novelty": 82,
        "impact": 80,
        "practicality": 75,
        "coreAlignment": 86
      },
      "oneSentenceSummary": "VLM引导奖励编译实现VLA策略的失败恢复。",
      "summaryCn": "提出ReCoVLA，冻结预训练VLA，用外部VLM推断失败模式，编译任务相关奖励用于残差策略训练，零样本仿真到真实迁移。解耦高层失败理解与低层校正控制。",
      "whyImportant": "用VLM编译奖励，实现通用失败恢复，不修改VLA模型。",
      "reasonTags": [
        "失败恢复",
        "VLM",
        "奖励编译"
      ],
      "innovationPoints": [
        "VLM作为语义奖励选择器指导残差策略训练",
        "仿真到真实零样本迁移恢复策略"
      ],
      "noveltyVerdict": "利用VLM的语义理解规划恢复，无需修改原VLA。",
      "duplicateRisk": "medium",
      "dedupeNote": "不同于内嵌恢复模块，采用外部VLM生成恢复奖励。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies"
      ]
    },
    {
      "id": "2606.09615v1",
      "title": "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience",
      "summary": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance.",
      "summaryRaw": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance. To move beyond the limitations of demonstration data, in this work, we propose DexPIE, a post-training framework for dexterous policy improvement from experience collected through real-world deployment. First, DexPIE enables effective exploration coverage through a dexterous-hand-adapted intervention system and multi-stage DAgger-style data collection across initial and intermediate task stages, providing reliable supervision for accurate policy evaluation. To reduce temporal noise between post-training rollouts and demonstration data, we introduce asynchronous inference in the relative action space, which better aligns rollout data with demonstrated behavior and allows the critic to learn a value function induced by a more consistent underlying policy. Finally, DexPIE improves the policy through conditioning on a continuous optimality indicator, allowing the policy to leverage the quality of data in a more fine-grained manner. Across three challenging real-world dexterous manipulation tasks, DexPIE achieves a 37% improvement in success rate over the demonstration-based reference policy, outperforming all baseline methods and demonstrating stronger robustness. The source code and dataset will be made publicly available.",
      "link": "https://arxiv.org/abs/2606.09615v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09615v1",
      "published": "2026-06-08T15:21:45Z",
      "updated": "2026-06-08T15:21:45Z",
      "authors": [
        "Ruizhe Liao",
        "Wenrui Chen",
        "Liangji Zeng",
        "Haoran Lin",
        "Fan Yang",
        "Kailun Yang",
        "Yaonan Wang"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "score": 80,
      "importanceLevel": "A",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 75,
        "novelty": 78,
        "impact": 85,
        "practicality": 80,
        "coreAlignment": 65
      },
      "oneSentenceSummary": "通过真实世界经验稳定提升灵巧操作策略。",
      "summaryCn": "提出DexPIE，利用手部适配干预系统多阶段DAgger数据收集，以及异步推理精炼器，从真实世界部署中收集经验提升灵巧操作策略，缓解演示数据偏差。",
      "whyImportant": "实现少样本灵巧操作策略的在线提升，降低人工采集需求。",
      "reasonTags": [
        "灵巧操作",
        "策略提升",
        "真实世界经验"
      ],
      "innovationPoints": [
        "多阶段DAgger避免协同误差",
        "异步推理处理延迟噪声"
      ],
      "noveltyVerdict": "有效利用少量部署数据提升灵巧操作。",
      "duplicateRisk": "medium",
      "dedupeNote": "专注于灵巧手，与VLA的失败恢复不同。",
      "retrievalGroups": [
        "category",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience"
      ]
    },
    {
      "id": "2606.09258v1",
      "title": "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection",
      "summary": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences.",
      "summaryRaw": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences. We propose Back to the Familiar Future (B2FF), a recovery framework for foresight-driven VLAs that leverages future visual conditioning as a recovery interface. Before execution, the VLA generates a milestone bank of familiar future states conditioned on the clean initial observation. At recovery time, a recoverability-aware selector selects a recovery milestone from this bank and enforces it as a fixed visual goal. This enables the VLA to robustly map off-trajectory observations back to a familiar future. On failure-injected LIBERO, under controlled recovery timing aligned with the injected failure, B2FF increases the average success rate of a baseline VLA from 56.3% to 74.0%, demonstrating that pre-imagined milestones can guide recovery without fine-tuning the low-level action generator.",
      "link": "https://arxiv.org/abs/2606.09258v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09258v1",
      "published": "2026-06-08T09:30:38Z",
      "updated": "2026-06-08T09:30:38Z",
      "authors": [
        "Suyeon Shin",
        "Juwon Kim",
        "Hyeonbin Park",
        "Hyunseo Kim",
        "Hyundo Lee",
        "Hyung-Sin Kim",
        "Byoung-Tak Zhang"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 80,
      "importanceLevel": "A",
      "lane": "VLA",
      "dimensionScores": {
        "relevance": 83,
        "novelty": 78,
        "impact": 72,
        "practicality": 75,
        "coreAlignment": 84
      },
      "oneSentenceSummary": "通过预想象里程碑选择实现VLA策略失败恢复。",
      "summaryCn": "提出B2FF，在干净初始观察条件生成熟悉未来状态里程碑库，恢复时用可恢复性感知选择器选取里程碑作为固定视觉目标，将脱轨观测映射回熟悉未来。",
      "whyImportant": "利用未来视觉条件化实现VLA策略的可靠失败恢复。",
      "reasonTags": [
        "失败恢复",
        "视觉里程碑",
        "VLA"
      ],
      "innovationPoints": [
        "预想象熟悉未来状态作为恢复界面",
        "可恢复性选择器确保有效里程碑"
      ],
      "noveltyVerdict": "创新地使用预生成视觉目标引导故障恢复。",
      "duplicateRisk": "medium",
      "dedupeNote": "与ReCoVLA不同，B2FF依赖VLA自身的未来视觉想象。",
      "retrievalGroups": [
        "category",
        "robotics",
        "vla_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection"
      ]
    },
    {
      "id": "2606.08992v1",
      "title": "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning",
      "summary": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on…",
      "summaryRaw": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on local visual cues and linear history-based reasoning, overlooking the spatial nature of navigation across explored regions, traversed paths, landmarks, and their spatial relations. In this paper, we propose SpaceVLN, a navigation agent built around Spatial Cognitive Memory and Task-Guided Spatial Reasoning. Specifically, SpaceVLN introduces an efficient stagewise closed-loop framework where planning and execution are organized around verifiable space--landmark stages. During navigation, the agent progressively abstracts explored regions into Spatial Waypoints and dynamically maintains subtask-grounded landmark evidence, forming a hierarchical Spatial Cognitive Memory for progress localization and spatial-relation understanding. Built on this memory, Spatial-CoT integrates task-progress reasoning with spatial perception, analysis, and prediction, enabling Task-Guided Spatial Reasoning for embodied navigation. The unified stage interface enables SpaceVLN to address both Vision-and-Language Navigation and Object-Goal Navigation under a unified zero-shot setting, without task-specific policy training. Across R2R-CE, RxR-CE, GN-Bench, and HM3D-OVON, SpaceVLN achieves state-of-the-art zero-shot performance, and real-robot deployment further validates its applicability. These results highlight Spatial Cognitive Memory and Task-Guided Spatial Reasoning as a practical foundation for stronger embodied navigation agents.",
      "link": "https://arxiv.org/abs/2606.08992v1",
      "pdfLink": "https://arxiv.org/pdf/2606.08992v1",
      "published": "2026-06-08T03:42:08Z",
      "updated": "2026-06-08T03:42:08Z",
      "authors": [
        "Yucheng Deng",
        "Pingrui Lai",
        "Xinhai Li",
        "Chenjia Bai",
        "Xiaoheng Deng",
        "Chengnuo Sun",
        "Xuelong Li",
        "Hua Yang"
      ],
      "categories": [
        "cs.AI",
        "cs.CV",
        "cs.RO"
      ],
      "score": 78,
      "importanceLevel": "A",
      "lane": "VLA",
      "dimensionScores": {
        "relevance": 75,
        "novelty": 80,
        "impact": 82,
        "practicality": 80,
        "coreAlignment": 70
      },
      "oneSentenceSummary": "零样本视觉-语言导航代理，具有在线空间认知记忆与推理。",
      "summaryCn": "提出SpaceVLN，围绕空间认知记忆和任务引导空间推理，采用阶段式闭环框架，将规划与执行组织到可验证的空间地标阶段。渐进构建空间路点图，实现高效零样本导航。",
      "whyImportant": "在连续环境中实现零样本语言导航，提升空间推理能力。",
      "reasonTags": [
        "视觉语言导航",
        "空间推理",
        "零样本"
      ],
      "innovationPoints": [
        "空间认知记忆抽象探索区域为路点",
        "任务引导的空间推理规划",
        "阶段式闭环框架验证规划"
      ],
      "noveltyVerdict": "将空间记忆与推理融入VLN，提升复杂环境导航。",
      "duplicateRisk": "low",
      "dedupeNote": "专注导航的空间认知模型，不同于操作VLA。",
      "retrievalGroups": [
        "category",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning"
      ]
    },
    {
      "id": "2606.09457v1",
      "title": "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models",
      "summary": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting.",
      "summaryRaw": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting. We introduce $ω$-EVA, a latent interactive world model that realizes an Envision--Verify--Act loop for embodied action generation. Its three-stage framework learns action-conditioned latent dynamics, trains a language-conditioned flow policy on dynamics-aware visual representations, and feeds the policy's proposal back through the world model. A tri-branch refiner jointly reasons over the current state, proposal-conditioned future, and proposed action to produce the final action chunk. Because consequence reasoning remains in latent feature space, $ω$-EVA avoids generating future videos at inference. Evaluations across diverse single-arm, bimanual, long-horizon, and perturbed simulation settings show that the complete interaction pipeline consistently improves the proposal policy, while latent diagnostics indicate meaningful action-conditioned future structure. With approximately 1.2B parameters and no additional robot-data pretraining, $ω$-EVA demonstrates a compact and competitive performance--scale--data trade-off, making the world model an active action-feedback module rather than a passive predictor.",
      "link": "https://arxiv.org/abs/2606.09457v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09457v1",
      "published": "2026-06-08T13:12:56Z",
      "updated": "2026-06-08T13:12:56Z",
      "authors": [
        "Zhenguo Sun",
        "Yu Sun",
        "Hande Huang",
        "Alois Knoll"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 78,
      "importanceLevel": "A",
      "lane": "WAM",
      "dimensionScores": {
        "relevance": 82,
        "novelty": 80,
        "impact": 72,
        "practicality": 70,
        "coreAlignment": 80
      },
      "oneSentenceSummary": "潜在交互世界模型实现设想-验证-行动循环。",
      "summaryCn": "提出ω-EVA，学习动作条件潜在动态，训练语言条件流策略，将策略提案反馈通过世界模型，由三分支精炼器联合推理当前状态、提案未来和动作，产生最终动作块。",
      "whyImportant": "实现内在设想验证，提升动作生成的可靠性和一致性。",
      "reasonTags": [
        "交互世界模型",
        "设想-验证-行动",
        "潜在动态"
      ],
      "innovationPoints": [
        "设想-验证-行动闭环避免生成未来视频",
        "潜在空间一致性推理"
      ],
      "noveltyVerdict": "将世界模型用于内部动作验证，提升决策质量。",
      "duplicateRisk": "medium",
      "dedupeNote": "区别于生成完整视频的WAM，在潜在空间验证。",
      "retrievalGroups": [
        "category",
        "robotics",
        "wam_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models"
      ]
    },
    {
      "id": "2606.09243v1",
      "title": "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video",
      "summary": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions.",
      "summaryRaw": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions. Therefore, we introduce EgoTactile, a benchmark pairing egocentric video with full-hand pressure supervision for diverse everyday objects, incorporating a bare-hand transfer subset to enable generalization to natural scenarios. Leveraging this benchmark, we first establish EgoPressureFormer as a discriminative baseline. Beyond this, to explicitly address the uncertainty in partial observations, we propose EgoPressureDiff, a conditional diffusion framework that adapts a large-scale pre-trained video diffusion backbone. By combining rich world knowledge priors with a Physically-Informed Feature Rectification layer to inject semantic constraints, our approach effectively infers plausible contact patterns and resolves visual-physical ambiguities. Extensive experiments demonstrate that our method achieves superior performance on the benchmark and robust transferability to in-the-wild scenarios. Our project page is available at https://egotactile.github.io/.",
      "link": "https://arxiv.org/abs/2606.09243v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09243v1",
      "published": "2026-06-08T09:20:03Z",
      "updated": "2026-06-08T09:20:03Z",
      "authors": [
        "Yuan Zeng",
        "Yujia Shi",
        "Tiao Tan",
        "Xingting Li",
        "Yaqi Qin",
        "Zongqing Lu",
        "Wenming Yang",
        "Jing-Hao Xue"
      ],
      "categories": [
        "cs.AI",
        "cs.CV"
      ],
      "score": 72,
      "importanceLevel": "B",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 72,
        "novelty": 80,
        "impact": 70,
        "practicality": 75,
        "coreAlignment": 60
      },
      "oneSentenceSummary": "从自我中心视频学习日常物体抓取压力。",
      "summaryCn": "提出EgoTactile基准，配对自我中心视频与全手压力监督。建立EgoPressureFormer基线，并提出EgoPressureDiff扩散框架与物理碰撞先验，实现稠密压力估计。",
      "whyImportant": "无需专用硬件，从普通视频预测抓取压力，助力远程操作。",
      "reasonTags": [
        "抓取压力",
        "视觉触觉",
        "扩散模型"
      ],
      "innovationPoints": [
        "大规模视频-压力配对基准",
        "视频扩散模型结合物理先验"
      ],
      "noveltyVerdict": "首次实现日常物体全手压力预测，非VLA核心。",
      "duplicateRisk": "low",
      "dedupeNote": "非VLA/WAM核心，但触觉感知对操作有增量价值。",
      "retrievalGroups": [
        "category",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video"
      ]
    },
    {
      "id": "2606.09640v1",
      "title": "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics",
      "summary": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a…",
      "summaryRaw": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a single additive residual, but do not preserve the internal mechanical structure of Euler--Lagrange systems. This leads to models that do not preserve symmetry, positive-definiteness, or the coupling between inertia and velocity-dependent terms, which can result in physically inconsistent predictions and reduced reliability when embedded in model-based controllers. We propose a structure-preserving residual learning framework that decomposes model mismatch into an inertia correction, the corresponding induced Coriolis term, and a generalized-force residual. The mechanical component is learned under physical constraints, while the disturbance-sensitive component is represented through a sparse history-dependent latent interaction model and adapted online using Bayesian linear regression. This separation preserves key mechanical structure while restricting adaptation to the part of the dynamics most affected by changing conditions. Experiments across multiple robotic platforms, including mobile, aerial, and manipulator systems, show that the proposed method improves dynamics prediction and trajectory tracking under coupled and time-varying dynamics. These results highlight the value of combining structured residual modeling, compact latent interaction selection, and selective online adaptation for real-world model-based control.",
      "link": "https://arxiv.org/abs/2606.09640v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09640v1",
      "published": "2026-06-08T15:36:00Z",
      "updated": "2026-06-08T15:36:00Z",
      "authors": [
        "Rishabh Dev Yadav",
        "Samaksh Ujjawal",
        "Sihao Sun",
        "Spandan Roy",
        "Wei Pan"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 70,
      "importanceLevel": "B",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 70,
        "novelty": 72,
        "impact": 75,
        "practicality": 70,
        "coreAlignment": 65
      },
      "oneSentenceSummary": "结构保持残差学习与在线自适应机器人动力学。",
      "summaryCn": "提出物理感知稀疏学习框架，将模型失配分解为惯性校正和诱导科里奥利项，保持正定性。结合稀疏诱导正则和选择性在线自适应，实现高效长期预测。",
      "whyImportant": "提升机械臂动力学模型精度，支撑模型基控制与规划。",
      "reasonTags": [
        "动力学建模",
        "物理感知",
        "残差学习"
      ],
      "innovationPoints": [
        "结构保持分解保持物理一致性",
        "稀疏学习与在线自适应"
      ],
      "noveltyVerdict": "改进动力学残差学习，保持欧拉-拉格朗日结构。",
      "duplicateRisk": "medium",
      "dedupeNote": "聚焦经典控制理论，不同于学习世界模型。",
      "retrievalGroups": [
        "category",
        "robotics",
        "wam_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics"
      ]
    },
    {
      "id": "2606.09507v1",
      "title": "Prisma-World: Camera-Controllable Multi-Agent Video World Model",
      "summary": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of…",
      "summaryRaw": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of the same scene, leading to inconsistent objects, layouts, and appearances across agents. Conventional camera conditioning controls individual trajectories, but it does not explicitly couple the generation of views that should agree under shared scene geometry. We introduce Prisma-World, a camera-controllable multi-agent world model that formulates multi-agent generation as a joint geometry-aware denoising process for cross-view consistency. Prisma-World processes all agent videos within one full-attention sequence, uses a multi-agent RoPE design to distinguish agent identities while preserving synchronized temporal coordinates, and injects relative camera geometry into attention to bias overlapping viewpoints toward shared scene evidence. To further strengthen multi-view consistency and enhance global spatial perception, we augment our framework with an overlap-decaying curriculum training paradigm alongside minimap-conditioned structural guidance. To facilitate the training and evaluation of multi-agent models, we introduce PrismaDataset, a large-scale UE5 dataset with panoramic acquisition across diverse scenes, composable multi-agent view groups with flexible agent counts and complex camera trajectories, and precise camera/action annotations for consistency training and evaluation. Experiments show that a single Prisma-World model can generate high-fidelity multi-agent videos with flexible agent numbers, camera controllability, improved cross-view consistency, and spatial grounding under minimap guidance.",
      "link": "https://arxiv.org/abs/2606.09507v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09507v1",
      "published": "2026-06-08T13:59:50Z",
      "updated": "2026-06-08T13:59:50Z",
      "authors": [
        "Huiqiang Sun",
        "Zhan Peng",
        "Size Wu",
        "Kun Wang",
        "Kang Liao",
        "Dianyi Wang",
        "Xingyu Zeng",
        "Sheng Jin"
      ],
      "categories": [
        "cs.CV"
      ],
      "score": 70,
      "importanceLevel": "B",
      "lane": "WAM",
      "dimensionScores": {
        "relevance": 70,
        "novelty": 85,
        "impact": 65,
        "practicality": 60,
        "coreAlignment": 70
      },
      "oneSentenceSummary": "相机可控多智能体视频世界模型，保证跨视图一致性。",
      "summaryCn": "提出Prisma-World，通过联合几何感知去噪过程生成多智能体视频，使用多智能体RoPE区分视角，保证重叠区域场景对象一致，支持可控相机运动的多智能体视觉模拟。",
      "whyImportant": "实现多智能体3D一致世界模拟，可用于协同场景生成。",
      "reasonTags": [
        "多智能体",
        "视频世界模型",
        "跨视图一致"
      ],
      "innovationPoints": [
        "联合去噪保证几何一致性",
        "多智能体RoPE视角编码",
        "相机可控"
      ],
      "noveltyVerdict": "首次将几何一致性引入多智能体视频生成世界模型。",
      "duplicateRisk": "low",
      "dedupeNote": "专注多智能体一致性，区别于单视图世界模型。",
      "retrievalGroups": [
        "category",
        "wam_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Prisma-World: Camera-Controllable Multi-Agent Video World Model"
      ]
    },
    {
      "id": "2606.09286v1",
      "title": "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands",
      "summary": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap.",
      "summaryRaw": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap. They rely heavily on dense reference trajectories and perfect state observability, which inherently limits physical generalization. We present Vision Guided Agile Interaction Control (VAIC), a unified framework that bridges this gap by operating exclusively on onboard depth, historical proprioception, and a decoupled user command interface. VAIC employs a two-stage distillation paradigm. First, a privileged teacher policy masters diverse interaction skills using precise object kinematics and exact environmental states. Second, a deployable student policy distills these capabilities by replacing full body tracking with velocity targets across multiple axes and an interaction indicator for each frame. The student utilizes a recurrent object adaptation module to implicitly infer unobservable object dynamics from raw depth streams and proprioception. Evaluations and real-world deployments on the humanoid robot demonstrate that a single VAIC policy successfully executes highly diverse dynamic tasks. These tasks include box carrying, cart interaction, and skateboarding, consistently outperforming baselines and advancing autonomous humanoid deployment.",
      "link": "https://arxiv.org/abs/2606.09286v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09286v1",
      "published": "2026-06-08T09:52:55Z",
      "updated": "2026-06-08T09:52:55Z",
      "authors": [
        "Dongting Li",
        "Qianyang Wu",
        "Xingyu Chen",
        "Liang Li",
        "Yuhang Lin",
        "Sikai Wu",
        "Guoyao Zhang",
        "Mingliang Zhou"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 69,
      "importanceLevel": "B",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 65,
        "novelty": 78,
        "impact": 70,
        "practicality": 70,
        "coreAlignment": 55
      },
      "oneSentenceSummary": "解耦命令的视觉引导人形灵动物体交互控制。",
      "summaryCn": "提出VAIC，用两阶段蒸馏范式从特权老师策略蒸馏到仅需深度、历史本体感和解耦命令的学生策略。实现人形机器人敏捷交互。",
      "whyImportant": "仅依赖机载传感器实现人形灵活交互，减少真机部署差距。",
      "reasonTags": [
        "人形控制",
        "视觉引导",
        "蒸馏"
      ],
      "innovationPoints": [
        "两步蒸馏从全状态到部分可观测",
        "速度目标取代全身跟踪"
      ],
      "noveltyVerdict": "有效缩小仿真到真实差距的人形控制框架。",
      "duplicateRisk": "low",
      "dedupeNote": "聚焦人形交互控制，非VLA。",
      "retrievalGroups": [
        "category",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands"
      ]
    },
    {
      "id": "2606.09559v1",
      "title": "Safe-RULE: Safe Reinforcement UnLEarning",
      "summary": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induc…",
      "summaryRaw": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induce unsafe policy behavior. In this work, we propose a new learning paradigm, named safe reinforcement unlearning (Safe-RULE), used as a defense framework to remove the influence of poisoned data without retraining from scratch or requiring access to the original training environment. We further extend reinforcement unlearning to offline Safe RL by explicitly accounting for both task performance and safety constraints during the unlearning process. Experiments across benchmark Safe RL tasks demonstrate that our approach effectively enhances safety performance against data poisoning attacks.",
      "link": "https://arxiv.org/abs/2606.09559v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09559v1",
      "published": "2026-06-08T14:33:40Z",
      "updated": "2026-06-08T14:33:40Z",
      "authors": [
        "Shixiong Jiang",
        "Taozheng Zhu",
        "Fanxin Kong"
      ],
      "categories": [
        "cs.AI",
        "cs.LG",
        "cs.RO"
      ],
      "score": 68,
      "importanceLevel": "B",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 65,
        "novelty": 75,
        "impact": 70,
        "practicality": 70,
        "coreAlignment": 55
      },
      "oneSentenceSummary": "安全强化遗忘学习，防御离线安全RL数据投毒。",
      "summaryCn": "提出Safe-RULE，移除毒化数据影响无需从头训练，在离线安全RL中同时考虑任务表现和安全约束进行遗忘学习。提升安全性能。",
      "whyImportant": "强化学习安全性，抵御数据攻击，提升策略安全。",
      "reasonTags": [
        "安全RL",
        "遗忘学习",
        "数据投毒"
      ],
      "innovationPoints": [
        "安全强化遗忘范式",
        "无需环境交互的防御"
      ],
      "noveltyVerdict": "引入遗忘学习至安全RL，新颖防御范式。",
      "duplicateRisk": "low",
      "dedupeNote": "聚焦安全防御，非VLA/WAM核心。",
      "retrievalGroups": [
        "category",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Safe-RULE: Safe Reinforcement UnLEarning"
      ]
    },
    {
      "id": "2606.09569v1",
      "title": "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications",
      "summary": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness.",
      "summaryRaw": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness. Existing methods, however, often involve high computational costs and rely heavily on abundant feature matches, limiting their applicability in time-sensitive driving scenarios. To address these limitations, this paper introduces a unified framework for efficient relative pose estimation, built upon a novel translation parameterization and first-order rotation approximation. Within this framework, we propose three efficient minimal solvers specifically designed for autonomous vehicles. The first solver integrates the vertical direction prior from Inertial Measurement Units (IMUs), the second utilizes the rotation axis direction prior during steering maneuvers, and the third is designed for planar motion - a realistic assumption for ground vehicles operating on structured roads. By reducing both the minimal number of point correspondences and the algebraic complexity, our methods enable faster hypothesis generation within RANSAC-based pipelines, improving suitability for real-time systems. Extensive experiments on synthetic datasets and the KITTI autonomous driving benchmark demonstrate that the proposed solvers achieve a favorable balance between speed and accuracy compared to existing state-of-the-art algorithms.",
      "link": "https://arxiv.org/abs/2606.09569v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09569v1",
      "published": "2026-06-08T14:43:53Z",
      "updated": "2026-06-08T14:43:53Z",
      "authors": [
        "Tao Li",
        "Liang Liu",
        "Jianli Han",
        "Weimin Lv"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "score": 74,
      "importanceLevel": "A",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 39,
        "novelty": 22,
        "impact": 14,
        "practicality": 8,
        "coreAlignment": 25
      },
      "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
      "summaryCn": "论文核心内容是：With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and…",
      "whyImportant": "命中机器人、自动驾驶、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
      "reasonTags": [
        "机器人",
        "自动驾驶",
        "新基准",
        "通用框架"
      ],
      "innovationPoints": [
        "包含新基准或新数据评测"
      ],
      "noveltyVerdict": "创新信号强，像是带新范式或新基准的工作。",
      "duplicateRisk": "low",
      "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
      "retrievalGroups": [
        "category",
        "driving",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications"
      ]
    },
    {
      "id": "2606.09499v1",
      "title": "Targeting World Models to Compromise Robot Learning Pipelines",
      "summary": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models i…",
      "summaryRaw": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models introduce a uniquely stealthy and effective data poisoning entry point into the robot learning supply chain that can result in the deployment of unsafe or otherwise compromised robotic policies despite training on seemingly safe ground truth training data. In contrast to traditional data poisoning techniques which directly implant dangerous trajectories into sold or uploaded datasets, our novel attack methods inject malicious prompts or compromising transition dynamics into visibly safe teleoperated datasets which are only activated once fed through a world model as input. This can result in the generation of synthetic, dangerous robot training trajectories and subsequently unsafe or compromised robot policies. We demonstrate the effectiveness of our attacks against both state of the art action conditioned and text conditioned world models, showing a full end-to-end backdoor on a downstream DRL policy and a proof-of-concept for the VLA setting. Overall these findings necessitate research into more secure world models and reevaluating their position within the robot learning supply chain.",
      "link": "https://arxiv.org/abs/2606.09499v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09499v1",
      "published": "2026-06-08T13:50:31Z",
      "updated": "2026-06-08T13:50:31Z",
      "authors": [
        "Ethan Rathbun",
        "Ahmed Agha",
        "Saaduddin Mahmud",
        "Christopher Amato",
        "Alina Oprea",
        "Eugene Bagdasarian"
      ],
      "categories": [
        "cs.AI",
        "cs.RO"
      ],
      "score": 72,
      "importanceLevel": "A",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 47,
        "novelty": 12,
        "impact": 9,
        "practicality": 13,
        "coreAlignment": 25
      },
      "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
      "summaryCn": "论文核心内容是：World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating…",
      "whyImportant": "命中VLA、WAM、机器人、新基准主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
      "reasonTags": [
        "VLA",
        "WAM",
        "机器人",
        "新基准"
      ],
      "innovationPoints": [
        "包含新基准或新数据评测"
      ],
      "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
      "duplicateRisk": "low",
      "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
      "retrievalGroups": [
        "category",
        "robotics",
        "wam_core"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Targeting World Models to Compromise Robot Learning Pipelines"
      ]
    },
    {
      "id": "2606.09218v1",
      "title": "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM",
      "summary": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges t…",
      "summaryRaw": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges to traditional synchronous, frame-based algorithms. To address these challenges, this paper presents a novel framework for full degree of freedom (DoF) egomotion estimation directly from asynchronous optical flow, specifically targeting the joint recovery of angular and linear velocities. We decouple the differential epipolar constraint into distinct angular and linear velocity components, and derive its formulation for asynchronous data. Based on this formulation, an optimization algorithm is developed that enables full-DoF egomotion estimation leveraging at least five points. Furthermore, by applying a first-order approximation to rotational dynamics, we transform the constraint equations into a polynomial form, resulting in the first algebraic minimal 5-point solver for this formulation. To ensure real-time performance in high-speed scenarios, we additionally propose an accelerated solver achieved by truncating high-order angular velocity terms. Extensive evaluations on both synthetic and real-world datasets demonstrate that the asynchronous approach outperforms traditional synchronous methods, particularly in its accuracy and robustness to spatiotemporal noise. We believe that this work establishes a critical foundation for efficient and accurate continuous-time motion estimation in high-speed robotics applications.",
      "link": "https://arxiv.org/abs/2606.09218v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09218v1",
      "published": "2026-06-08T08:51:29Z",
      "updated": "2026-06-08T08:51:29Z",
      "authors": [
        "Shuo Pan",
        "Banglei Guan",
        "Bin Li",
        "Zhenbao Yu",
        "Zibin Liu",
        "Zi Wang",
        "Yang Shang",
        "Qifeng Yu"
      ],
      "categories": [
        "cs.CV"
      ],
      "score": 61,
      "importanceLevel": "A",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 30,
        "novelty": 17,
        "impact": 9,
        "practicality": 8,
        "coreAlignment": 11
      },
      "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
      "summaryCn": "论文核心内容是：As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal…",
      "whyImportant": "命中机器人、新基准、通用框架、真实实验主题，分类覆盖cs.CV，并体现较强的新颖性与影响潜力。",
      "reasonTags": [
        "机器人",
        "新基准",
        "通用框架",
        "真实实验"
      ],
      "innovationPoints": [
        "包含新基准或新数据评测",
        "提供真实场景实验验证"
      ],
      "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
      "duplicateRisk": "low",
      "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
      "retrievalGroups": [
        "category",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM"
      ]
    },
    {
      "id": "2606.09268v1",
      "title": "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation",
      "summary": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide d…",
      "summaryRaw": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide direct metric measurements. However, such multi-sensor configurations necessitate complex spatial-temporal calibration and increase deployment overhead. Although vision-only approaches offer a low-cost and scalable alternative, existing monocular visual systems typically struggle to simultaneously achieve efficient, globally consistent localization and dense, metric-consistent geometric perception. To bridge this gap, we propose \\textbf{VGP-Nav}, a unified framework for \\textit{Metric-Aware Visual Geometric Perception} that relies solely on monocular RGB input to jointly support metric localization and obstacle perception. Our key insight is to anchor localization-grounded visual geometry to physically meaningful scale constraints derived from ground-plane geometry, thereby providing a reliable metric reference for monocular perception. VGP-Nav resolves monocular scale ambiguity online and produces localization-grounded, metric obstacle representations that are directly applicable to downstream planning. Extensive experiments demonstrate strong generalization across diverse environments and successful deployment on real mobile robots, highlighting the practicality of our approach for scalable, low-cost, and safe autonomous navigation.",
      "link": "https://arxiv.org/abs/2606.09268v1",
      "pdfLink": "https://arxiv.org/pdf/2606.09268v1",
      "published": "2026-06-08T09:38:14Z",
      "updated": "2026-06-08T09:38:14Z",
      "authors": [
        "Hewei Pan",
        "Weiye Zhu",
        "Zekai Zhang",
        "Zitong Huang",
        "Rongtao Xu",
        "Jinbao Wang",
        "Feng Zheng"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 58,
      "importanceLevel": "A",
      "lane": "Robotics",
      "dimensionScores": {
        "relevance": 29,
        "novelty": 16,
        "impact": 6,
        "practicality": 13,
        "coreAlignment": 14
      },
      "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
      "summaryCn": "论文核心内容是：Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obst…",
      "whyImportant": "命中机器人、通用框架主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
      "reasonTags": [
        "机器人",
        "通用框架"
      ],
      "innovationPoints": [
        "提出具有跟踪价值的方法设计"
      ],
      "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
      "duplicateRisk": "low",
      "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
      "retrievalGroups": [
        "category",
        "robotics"
      ],
      "mergedCount": 1,
      "mergedTitles": [
        "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation"
      ]
    }
  ],
  "paperSets": {
    "overall": [
      {
        "id": "2606.09572v1",
        "title": "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control",
        "summary": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient tas…",
        "summaryRaw": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient task-conditioned visuomotor control. CT-VAM acts as a compact local execution policy that predicts action chunks from dualview visual observations, proprioception, and a lightweight task condition, potentially enabling a practical cloud-edge paradigm in which high-level semantic reasoning can be handled by large models while fast closed-loop control runs on local hardware. To fuse heterogeneous inputs effectively, CT-VAM introduces TARS (Thalamic Action Routing Stream), a stream-separated conditional attention decoder that independently routes action, visual and task streams, preventing dense sensory tokens from overwhelming compact task-relevant conditions. With only 68M parameters, CT-VAM achieves LIBERO success rates competitive with substantially larger VLA models, while reducing inference latency. Together with flow-consistent inpainting for asynchronous chunk execution, CT-VAM supports high-frequency control and demonstrates robust realworld deployment on resource-constrained robotic platforms.",
        "link": "https://arxiv.org/abs/2606.09572v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09572v1",
        "published": "2026-06-08T14:46:43Z",
        "updated": "2026-06-08T14:46:43Z",
        "authors": [
          "Jiacheng Li",
          "Yize Guo",
          "Jiabin Guo",
          "Qingchen Liu",
          "Jiahu Qin"
        ],
        "categories": [
          "cs.AI",
          "cs.RO"
        ],
        "score": 95,
        "importanceLevel": "S",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 95,
          "novelty": 93,
          "impact": 88,
          "practicality": 90,
          "coreAlignment": 96
        },
        "oneSentenceSummary": "受小脑-丘脑启发的视觉动作模型，实现高效任务条件视觉运动控制。",
        "summaryCn": "提出CT-VAM，通过双视图视觉、本体感知和轻量级任务条件预测动作块。引入TARS流分离条件注意力解码器，独立路由动作、视觉和本体感知token。支持云端大模型高层推理与本地快速闭环控制协同。",
        "whyImportant": "实现高效视觉运动控制，分离高层推理与低频执行，推动云端-边缘架构。",
        "reasonTags": [
          "视觉动作模型",
          "端侧高效推理",
          "小脑-丘脑启发"
        ],
        "innovationPoints": [
          "小脑-丘脑启发式架构解耦任务意图与实时控制",
          "TARS流分离条件注意力，独立路由多模态输入",
          "轻量级本地策略支持高频闭环控制"
        ],
        "noveltyVerdict": "架构新颖，将生物启发引入VLA，分离推理与控制。",
        "duplicateRisk": "low",
        "dedupeNote": "首次从神经科学角度设计VLA解耦架构。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control"
        ]
      },
      {
        "id": "2606.09215v1",
        "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
        "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a h…",
        "summaryRaw": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces and reducing the legs to balance-preserving locomotion. We present MotionWAM, a real-time WAM that drives autonomous humanoid loco-manipulation from a single egocentric camera by conditioning the policy on the intermediate denoising features of a video world model. MotionWAM replaces the upper-lower split with a unified motion latent and predicts whole-body motion tokens that jointly cover locomotion, torso motion, height regulation, foot interaction, and hand manipulation in a single action space. A three-stage learning framework progressively adapts the video world model to egocentric visual dynamics and to the target humanoid embodiment. On nine real-world Unitree G1 tasks, MotionWAM runs in real time, substantially outperforms Vision-Language-Action (VLA) baselines fine-tuned on the same demonstrations by over 30% in overall success rate, and executes task-driven foot interaction that decoupled upper-lower policies cannot reach. Our results suggest that video-pretrained WAMs can be lifted from tabletop manipulation to coordinated, human-like whole-body humanoid control.",
        "link": "https://arxiv.org/abs/2606.09215v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
        "published": "2026-06-08T08:50:14Z",
        "updated": "2026-06-08T08:50:14Z",
        "authors": [
          "Jia Zheng",
          "Teli Ma",
          "Yudong Fan",
          "Zifan Wang",
          "Shuo Yang",
          "Junwei Liang"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 95,
        "importanceLevel": "S",
        "lane": "Both",
        "dimensionScores": {
          "relevance": 92,
          "novelty": 90,
          "impact": 88,
          "practicality": 80,
          "coreAlignment": 94
        },
        "oneSentenceSummary": "实时世界动作模型驱动人形机器人全身移动操作。",
        "summaryCn": "提出MotionWAM，从单目相机实时驱动人形移动操作。用统一运动潜变量取代上下半身分割，预测全身运动token，并利用视频世界模型的中间去噪特征条件化策略，实现实时性。",
        "whyImportant": "首次实现实时世界动作模型用于人形机器人，提升全身协调。",
        "reasonTags": [
          "世界动作模型",
          "人形机器人",
          "实时控制"
        ],
        "innovationPoints": [
          "实时WAM通过统一运动潜变量实现全身协调",
          "条件化策略于去噪特征，避免高维扩散延迟",
          "端到端单目驱动移动操作"
        ],
        "noveltyVerdict": "突破WAM实时性瓶颈，针对高自由度人形机器人。",
        "duplicateRisk": "low",
        "dedupeNote": "专注人形全身移动操作，不同于桌面操作WAM。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation"
        ]
      },
      {
        "id": "2606.09009v1",
        "title": "Scaling by Diversified Experience for Vision-Language-Action Models",
        "summary": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences.",
        "summaryRaw": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences. We propose an Intention Decoupling algorithm to isolate control-relevant features from reasoning contexts and a similar-sample guided RL pipeline to stabilize policy updates and mitigate distribution shift. Extensive experiments on real-world robotic tasks and multi-modal benchmarks demonstrate that SyVLA achieves superior task success rates and stronger out-of-distribution generalization compared to existing methods, while effectively preserving core vision-language capabilities. Codes and Datasets is released on \\href{https://sy-vla.github.io/}{project page}.",
        "link": "https://arxiv.org/abs/2606.09009v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09009v1",
        "published": "2026-06-08T04:13:38Z",
        "updated": "2026-06-08T04:13:38Z",
        "authors": [
          "Leiyu Wang",
          "Zhaofengnian Wang",
          "Xueqi Li",
          "Luoyi Fan",
          "Cewu Lu",
          "Nanyang Ye"
        ],
        "categories": [
          "cs.CV"
        ],
        "score": 94,
        "importanceLevel": "S",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 90,
          "novelty": 91,
          "impact": 85,
          "practicality": 82,
          "coreAlignment": 92
        },
        "oneSentenceSummary": "通过多样化经验训练鲁棒VLA模型，解耦意图与稳定策略优化。",
        "summaryCn": "提出SyVLA，利用多样化经验和意图解耦算法隔离控制相关特征，以及相似样本引导的RL管道稳定策略更新。在真实机器人任务和多模态基准上展示优越泛化能力。",
        "whyImportant": "解决VLA高层推理与低层控制纠缠，提升分布外泛化。",
        "reasonTags": [
          "多样化经验",
          "意图解耦",
          "鲁棒VLA"
        ],
        "innovationPoints": [
          "意图解耦算法隔离推理与控制特征",
          "相似样本引导RL稳定训练，缓解分布偏移"
        ],
        "noveltyVerdict": "在VLA训练策略上创新，有效提升鲁棒性。",
        "duplicateRisk": "low",
        "dedupeNote": "将意图解耦与RL稳定化结合，区别于纯模仿学习。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Scaling by Diversified Experience for Vision-Language-Action Models"
        ]
      },
      {
        "id": "2606.09416v1",
        "title": "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer",
        "summary": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named.",
        "summaryRaw": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named. Recent language-agent work names this layer the harness, the external system that mediates tools, manages state, bounds resources, and records execution. The robotics community has not yet adopted this framing, and we propose that robot middleware is that harness. A Physical AI harness differs from a software harness in where it intervenes. A software harness mediates at tool-call boundaries. A Physical AI harness must mediate at control, computing, and communication simultaneously, because a learned policy's output crosses all three: its commands shift the trajectory, its inference time shifts the schedule, and its payload shifts the bandwidth. Robot middleware is the lowest robot-stack layer with mediating abstractions over all three, so it is best positioned to compose their enforcement. It already provides most of what a harness needs but lacks the enforcement for an AI model. We name this missing enforcement as three functions: Projection gates each output at emission, Isolation bounds the model's execution and transmission slot, and Transfer falls back to a verified baseline when checks fail. Each appears today as hand-built application code in deployed robot systems, built on surfaces robot middleware already provides. Robot middleware should host them not as the best single-axis enforcer but as the layer that composes all three. We sketch this as a ROS 2 Harness Profile, a deployment artifact that carries an AI model's declared output region, inference budget, and operating regime while the middleware enforces them across ROS 2, DDS, and Zenoh.",
        "link": "https://arxiv.org/abs/2606.09416v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09416v1",
        "published": "2026-06-08T12:29:54Z",
        "updated": "2026-06-08T12:29:54Z",
        "authors": [
          "Sanghoon Lee",
          "Jiyeong Chae",
          "Kyung-Joon Park"
        ],
        "categories": [
          "cs.AI",
          "cs.RO"
        ],
        "score": 85,
        "importanceLevel": "A",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 80,
          "novelty": 75,
          "impact": 80,
          "practicality": 90,
          "coreAlignment": 70
        },
        "oneSentenceSummary": "机器人中间件作为物理AI的线束层，整合VLA策略与系统资源管理。",
        "summaryCn": "提出机器人中间件是物理AI的线束层，不同于软件线束在工具调用边界介入，物理AI线束需同时媒介控制、计算与通信。为VLA模型提供确定性时序与资源管理。",
        "whyImportant": "明确物理AI部署的工程框架，促进VLA模型可靠集成。",
        "reasonTags": [
          "中间件",
          "物理AI",
          "线束工程"
        ],
        "innovationPoints": [
          "提出物理AI线束概念，区分于软件线束",
          "强调同步控制、计算与通信的需求"
        ],
        "noveltyVerdict": "命名并框架化机器人在物理AI时代的新角色。",
        "duplicateRisk": "medium",
        "dedupeNote": "非VLA模型创新，而是系统集成框架。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer"
        ]
      },
      {
        "id": "2606.09337v1",
        "title": "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation",
        "summary": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies.",
        "summaryRaw": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies. When contact conditions shift from the training distribution, the policy cannot perform online adaptation, leading to problems such as inappropriate contact forces and inefficient retries. Therefore, we propose TORL-VLA, a tactile-guided online reinforcement learning framework that couples tactile feedback with policy refinement for contact-rich manipulation. Our method introduces a tactile-derived wrench-aware VLA to predict reference actions and future wrench sequences, while a lightweight online RL module is used to refine the reference actions. To stabilize learning from mixed exploratory policy-generated and human-intervention data, we introduce an intervention-censored critic that prevents post-intervention success from being wrongly credited to policy-generated actions preceding intervention. Real-robot experiments on long-horizon contact-rich tasks, including latch manipulation, coffee-cup placement, and egg handling, show that TORL-VLA improves success rates at both subtask and full-task levels, as well as time-bounded execution efficiency over strong baselines.",
        "link": "https://arxiv.org/abs/2606.09337v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09337v1",
        "published": "2026-06-08T11:05:05Z",
        "updated": "2026-06-08T11:05:05Z",
        "authors": [
          "Huaihang Zheng",
          "Yi Yang",
          "Kai Ma",
          "Shenglin Xu",
          "Tian Xie",
          "Guozheng Li",
          "Xiangyu Wang",
          "Yiren Ma"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 85,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 88,
          "novelty": 80,
          "impact": 75,
          "practicality": 78,
          "coreAlignment": 86
        },
        "oneSentenceSummary": "触觉引导在线强化学习用于接触丰富操作的VLA。",
        "summaryCn": "提出TORL-VLA，结合触觉衍生力觉感知VLA预测参考动作和未来力序列，并用轻量在线RL模块优化参考动作。通过混合探索策略和在线学习稳定训练。",
        "whyImportant": "引入触觉反馈在线RL，提升VLA在接触任务中的适应能力。",
        "reasonTags": [
          "触觉反馈",
          "在线RL",
          "接触丰富操作"
        ],
        "innovationPoints": [
          "触觉-力觉感知VLA预测动作和力序列",
          "在线RL模块在部署时微调策略"
        ],
        "noveltyVerdict": "将触觉与在线RL融入VLA，增强接触任务鲁棒性。",
        "duplicateRisk": "medium",
        "dedupeNote": "区别于离线VLA，专注在线RL细调，触觉信息驱动。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation"
        ]
      },
      {
        "id": "2606.08962v1",
        "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
        "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive.",
        "summaryRaw": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process. Existing acceleration methods reduce this cost by caching and reusing computation within a single chunk's denoising trajectory. Our empirical analysis reveals a substantial source of redundancy they overlook: redundancy across chunks. When a robot executes a smooth behavior, the residuals computed at a given denoising step are strongly correlated from one chunk to the next. We introduce C$^3$ache, a training-free method that caches and reuses these residuals across inference chunks at the same denoising step. Experiments on benchmarks with a Fast-WAM backbone show that C$^3$ache achieves up to a $2.5\\times$ speedup in total wall-clock inference time, with negligible degradation in task success rate.",
        "link": "https://arxiv.org/abs/2606.08962v1",
        "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
        "published": "2026-06-08T03:01:10Z",
        "updated": "2026-06-08T03:01:10Z",
        "authors": [
          "Weisen Zhao",
          "Lam Nguyen",
          "Zhicong Lu",
          "Yuzhang Shang"
        ],
        "categories": [
          "cs.CV",
          "cs.LG",
          "cs.RO"
        ],
        "score": 82,
        "importanceLevel": "A",
        "lane": "Both",
        "dimensionScores": {
          "relevance": 85,
          "novelty": 85,
          "impact": 78,
          "practicality": 88,
          "coreAlignment": 86
        },
        "oneSentenceSummary": "跨推理块缓存加速世界动作模型推理。",
        "summaryCn": "提出C3ache，利用世界动作模型多推理块之间的残差相关性，缓存并复用跨块残差，无需训练即可加速推理，弥补现有方法只重用单块内去噪计算的不足。",
        "whyImportant": "首次利用跨块冗余加速WAM，提高实时性。",
        "reasonTags": [
          "推理加速",
          "世界动作模型",
          "跨块缓存"
        ],
        "innovationPoints": [
          "发现并利用跨块残差相关性实现缓存",
          "训练-free方法，即插即用"
        ],
        "noveltyVerdict": "新颖的跨块缓存策略，显著降低WAM延迟。",
        "duplicateRisk": "low",
        "dedupeNote": "不同于单块内缓存加速，开创跨块冗余利用。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache"
        ]
      },
      {
        "id": "2606.09630v1",
        "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
        "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer t…",
        "summaryRaw": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses it as a semantic reward selector: it predicts a recovery descriptor and reward mask for in-simulation residual-policy training, followed by zero-shot sim-to-real deployment of the trained recovery policies. This decouples high-level failure understanding from low-level corrective control to support different VLAs. Experiments across short-horizon, long-horizon, and contact-rich manipulation tasks show that ReCoVLA outperforms the tested baselines on average. In simulation, our reward compiler improves average success from 36.7% for the fine-tuned $π_{0.5}$ baseline to 66.7%. In physical zero-shot sim-to-real experiments, ReCoVLA achieves the best average performance, with 61.7% success.",
        "link": "https://arxiv.org/abs/2606.09630v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
        "published": "2026-06-08T15:29:09Z",
        "updated": "2026-06-08T15:29:09Z",
        "authors": [
          "Haodi Hu",
          "Chung-Ta Huang",
          "Jing Liu",
          "Ye Wang",
          "Kei Suzuki",
          "Matthew Brand",
          "Toshiaki Koike-Akino"
        ],
        "categories": [
          "cs.AI",
          "cs.LG",
          "cs.RO"
        ],
        "score": 82,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 85,
          "novelty": 82,
          "impact": 80,
          "practicality": 75,
          "coreAlignment": 86
        },
        "oneSentenceSummary": "VLM引导奖励编译实现VLA策略的失败恢复。",
        "summaryCn": "提出ReCoVLA，冻结预训练VLA，用外部VLM推断失败模式，编译任务相关奖励用于残差策略训练，零样本仿真到真实迁移。解耦高层失败理解与低层校正控制。",
        "whyImportant": "用VLM编译奖励，实现通用失败恢复，不修改VLA模型。",
        "reasonTags": [
          "失败恢复",
          "VLM",
          "奖励编译"
        ],
        "innovationPoints": [
          "VLM作为语义奖励选择器指导残差策略训练",
          "仿真到真实零样本迁移恢复策略"
        ],
        "noveltyVerdict": "利用VLM的语义理解规划恢复，无需修改原VLA。",
        "duplicateRisk": "medium",
        "dedupeNote": "不同于内嵌恢复模块，采用外部VLM生成恢复奖励。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies"
        ]
      },
      {
        "id": "2606.09615v1",
        "title": "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience",
        "summary": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance.",
        "summaryRaw": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance. To move beyond the limitations of demonstration data, in this work, we propose DexPIE, a post-training framework for dexterous policy improvement from experience collected through real-world deployment. First, DexPIE enables effective exploration coverage through a dexterous-hand-adapted intervention system and multi-stage DAgger-style data collection across initial and intermediate task stages, providing reliable supervision for accurate policy evaluation. To reduce temporal noise between post-training rollouts and demonstration data, we introduce asynchronous inference in the relative action space, which better aligns rollout data with demonstrated behavior and allows the critic to learn a value function induced by a more consistent underlying policy. Finally, DexPIE improves the policy through conditioning on a continuous optimality indicator, allowing the policy to leverage the quality of data in a more fine-grained manner. Across three challenging real-world dexterous manipulation tasks, DexPIE achieves a 37% improvement in success rate over the demonstration-based reference policy, outperforming all baseline methods and demonstrating stronger robustness. The source code and dataset will be made publicly available.",
        "link": "https://arxiv.org/abs/2606.09615v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09615v1",
        "published": "2026-06-08T15:21:45Z",
        "updated": "2026-06-08T15:21:45Z",
        "authors": [
          "Ruizhe Liao",
          "Wenrui Chen",
          "Liangji Zeng",
          "Haoran Lin",
          "Fan Yang",
          "Kailun Yang",
          "Yaonan Wang"
        ],
        "categories": [
          "cs.CV",
          "cs.RO"
        ],
        "score": 80,
        "importanceLevel": "A",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 75,
          "novelty": 78,
          "impact": 85,
          "practicality": 80,
          "coreAlignment": 65
        },
        "oneSentenceSummary": "通过真实世界经验稳定提升灵巧操作策略。",
        "summaryCn": "提出DexPIE，利用手部适配干预系统多阶段DAgger数据收集，以及异步推理精炼器，从真实世界部署中收集经验提升灵巧操作策略，缓解演示数据偏差。",
        "whyImportant": "实现少样本灵巧操作策略的在线提升，降低人工采集需求。",
        "reasonTags": [
          "灵巧操作",
          "策略提升",
          "真实世界经验"
        ],
        "innovationPoints": [
          "多阶段DAgger避免协同误差",
          "异步推理处理延迟噪声"
        ],
        "noveltyVerdict": "有效利用少量部署数据提升灵巧操作。",
        "duplicateRisk": "medium",
        "dedupeNote": "专注于灵巧手，与VLA的失败恢复不同。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience"
        ]
      },
      {
        "id": "2606.09258v1",
        "title": "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection",
        "summary": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences.",
        "summaryRaw": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences. We propose Back to the Familiar Future (B2FF), a recovery framework for foresight-driven VLAs that leverages future visual conditioning as a recovery interface. Before execution, the VLA generates a milestone bank of familiar future states conditioned on the clean initial observation. At recovery time, a recoverability-aware selector selects a recovery milestone from this bank and enforces it as a fixed visual goal. This enables the VLA to robustly map off-trajectory observations back to a familiar future. On failure-injected LIBERO, under controlled recovery timing aligned with the injected failure, B2FF increases the average success rate of a baseline VLA from 56.3% to 74.0%, demonstrating that pre-imagined milestones can guide recovery without fine-tuning the low-level action generator.",
        "link": "https://arxiv.org/abs/2606.09258v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09258v1",
        "published": "2026-06-08T09:30:38Z",
        "updated": "2026-06-08T09:30:38Z",
        "authors": [
          "Suyeon Shin",
          "Juwon Kim",
          "Hyeonbin Park",
          "Hyunseo Kim",
          "Hyundo Lee",
          "Hyung-Sin Kim",
          "Byoung-Tak Zhang"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 80,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 83,
          "novelty": 78,
          "impact": 72,
          "practicality": 75,
          "coreAlignment": 84
        },
        "oneSentenceSummary": "通过预想象里程碑选择实现VLA策略失败恢复。",
        "summaryCn": "提出B2FF，在干净初始观察条件生成熟悉未来状态里程碑库，恢复时用可恢复性感知选择器选取里程碑作为固定视觉目标，将脱轨观测映射回熟悉未来。",
        "whyImportant": "利用未来视觉条件化实现VLA策略的可靠失败恢复。",
        "reasonTags": [
          "失败恢复",
          "视觉里程碑",
          "VLA"
        ],
        "innovationPoints": [
          "预想象熟悉未来状态作为恢复界面",
          "可恢复性选择器确保有效里程碑"
        ],
        "noveltyVerdict": "创新地使用预生成视觉目标引导故障恢复。",
        "duplicateRisk": "medium",
        "dedupeNote": "与ReCoVLA不同，B2FF依赖VLA自身的未来视觉想象。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection"
        ]
      },
      {
        "id": "2606.08992v1",
        "title": "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning",
        "summary": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on…",
        "summaryRaw": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on local visual cues and linear history-based reasoning, overlooking the spatial nature of navigation across explored regions, traversed paths, landmarks, and their spatial relations. In this paper, we propose SpaceVLN, a navigation agent built around Spatial Cognitive Memory and Task-Guided Spatial Reasoning. Specifically, SpaceVLN introduces an efficient stagewise closed-loop framework where planning and execution are organized around verifiable space--landmark stages. During navigation, the agent progressively abstracts explored regions into Spatial Waypoints and dynamically maintains subtask-grounded landmark evidence, forming a hierarchical Spatial Cognitive Memory for progress localization and spatial-relation understanding. Built on this memory, Spatial-CoT integrates task-progress reasoning with spatial perception, analysis, and prediction, enabling Task-Guided Spatial Reasoning for embodied navigation. The unified stage interface enables SpaceVLN to address both Vision-and-Language Navigation and Object-Goal Navigation under a unified zero-shot setting, without task-specific policy training. Across R2R-CE, RxR-CE, GN-Bench, and HM3D-OVON, SpaceVLN achieves state-of-the-art zero-shot performance, and real-robot deployment further validates its applicability. These results highlight Spatial Cognitive Memory and Task-Guided Spatial Reasoning as a practical foundation for stronger embodied navigation agents.",
        "link": "https://arxiv.org/abs/2606.08992v1",
        "pdfLink": "https://arxiv.org/pdf/2606.08992v1",
        "published": "2026-06-08T03:42:08Z",
        "updated": "2026-06-08T03:42:08Z",
        "authors": [
          "Yucheng Deng",
          "Pingrui Lai",
          "Xinhai Li",
          "Chenjia Bai",
          "Xiaoheng Deng",
          "Chengnuo Sun",
          "Xuelong Li",
          "Hua Yang"
        ],
        "categories": [
          "cs.AI",
          "cs.CV",
          "cs.RO"
        ],
        "score": 78,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 75,
          "novelty": 80,
          "impact": 82,
          "practicality": 80,
          "coreAlignment": 70
        },
        "oneSentenceSummary": "零样本视觉-语言导航代理，具有在线空间认知记忆与推理。",
        "summaryCn": "提出SpaceVLN，围绕空间认知记忆和任务引导空间推理，采用阶段式闭环框架，将规划与执行组织到可验证的空间地标阶段。渐进构建空间路点图，实现高效零样本导航。",
        "whyImportant": "在连续环境中实现零样本语言导航，提升空间推理能力。",
        "reasonTags": [
          "视觉语言导航",
          "空间推理",
          "零样本"
        ],
        "innovationPoints": [
          "空间认知记忆抽象探索区域为路点",
          "任务引导的空间推理规划",
          "阶段式闭环框架验证规划"
        ],
        "noveltyVerdict": "将空间记忆与推理融入VLN，提升复杂环境导航。",
        "duplicateRisk": "low",
        "dedupeNote": "专注导航的空间认知模型，不同于操作VLA。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning"
        ]
      },
      {
        "id": "2606.09457v1",
        "title": "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models",
        "summary": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting.",
        "summaryRaw": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting. We introduce $ω$-EVA, a latent interactive world model that realizes an Envision--Verify--Act loop for embodied action generation. Its three-stage framework learns action-conditioned latent dynamics, trains a language-conditioned flow policy on dynamics-aware visual representations, and feeds the policy's proposal back through the world model. A tri-branch refiner jointly reasons over the current state, proposal-conditioned future, and proposed action to produce the final action chunk. Because consequence reasoning remains in latent feature space, $ω$-EVA avoids generating future videos at inference. Evaluations across diverse single-arm, bimanual, long-horizon, and perturbed simulation settings show that the complete interaction pipeline consistently improves the proposal policy, while latent diagnostics indicate meaningful action-conditioned future structure. With approximately 1.2B parameters and no additional robot-data pretraining, $ω$-EVA demonstrates a compact and competitive performance--scale--data trade-off, making the world model an active action-feedback module rather than a passive predictor.",
        "link": "https://arxiv.org/abs/2606.09457v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09457v1",
        "published": "2026-06-08T13:12:56Z",
        "updated": "2026-06-08T13:12:56Z",
        "authors": [
          "Zhenguo Sun",
          "Yu Sun",
          "Hande Huang",
          "Alois Knoll"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 78,
        "importanceLevel": "A",
        "lane": "WAM",
        "dimensionScores": {
          "relevance": 82,
          "novelty": 80,
          "impact": 72,
          "practicality": 70,
          "coreAlignment": 80
        },
        "oneSentenceSummary": "潜在交互世界模型实现设想-验证-行动循环。",
        "summaryCn": "提出ω-EVA，学习动作条件潜在动态，训练语言条件流策略，将策略提案反馈通过世界模型，由三分支精炼器联合推理当前状态、提案未来和动作，产生最终动作块。",
        "whyImportant": "实现内在设想验证，提升动作生成的可靠性和一致性。",
        "reasonTags": [
          "交互世界模型",
          "设想-验证-行动",
          "潜在动态"
        ],
        "innovationPoints": [
          "设想-验证-行动闭环避免生成未来视频",
          "潜在空间一致性推理"
        ],
        "noveltyVerdict": "将世界模型用于内部动作验证，提升决策质量。",
        "duplicateRisk": "medium",
        "dedupeNote": "区别于生成完整视频的WAM，在潜在空间验证。",
        "retrievalGroups": [
          "category",
          "robotics",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models"
        ]
      },
      {
        "id": "2606.09243v1",
        "title": "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video",
        "summary": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions.",
        "summaryRaw": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions. Therefore, we introduce EgoTactile, a benchmark pairing egocentric video with full-hand pressure supervision for diverse everyday objects, incorporating a bare-hand transfer subset to enable generalization to natural scenarios. Leveraging this benchmark, we first establish EgoPressureFormer as a discriminative baseline. Beyond this, to explicitly address the uncertainty in partial observations, we propose EgoPressureDiff, a conditional diffusion framework that adapts a large-scale pre-trained video diffusion backbone. By combining rich world knowledge priors with a Physically-Informed Feature Rectification layer to inject semantic constraints, our approach effectively infers plausible contact patterns and resolves visual-physical ambiguities. Extensive experiments demonstrate that our method achieves superior performance on the benchmark and robust transferability to in-the-wild scenarios. Our project page is available at https://egotactile.github.io/.",
        "link": "https://arxiv.org/abs/2606.09243v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09243v1",
        "published": "2026-06-08T09:20:03Z",
        "updated": "2026-06-08T09:20:03Z",
        "authors": [
          "Yuan Zeng",
          "Yujia Shi",
          "Tiao Tan",
          "Xingting Li",
          "Yaqi Qin",
          "Zongqing Lu",
          "Wenming Yang",
          "Jing-Hao Xue"
        ],
        "categories": [
          "cs.AI",
          "cs.CV"
        ],
        "score": 72,
        "importanceLevel": "B",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 72,
          "novelty": 80,
          "impact": 70,
          "practicality": 75,
          "coreAlignment": 60
        },
        "oneSentenceSummary": "从自我中心视频学习日常物体抓取压力。",
        "summaryCn": "提出EgoTactile基准，配对自我中心视频与全手压力监督。建立EgoPressureFormer基线，并提出EgoPressureDiff扩散框架与物理碰撞先验，实现稠密压力估计。",
        "whyImportant": "无需专用硬件，从普通视频预测抓取压力，助力远程操作。",
        "reasonTags": [
          "抓取压力",
          "视觉触觉",
          "扩散模型"
        ],
        "innovationPoints": [
          "大规模视频-压力配对基准",
          "视频扩散模型结合物理先验"
        ],
        "noveltyVerdict": "首次实现日常物体全手压力预测，非VLA核心。",
        "duplicateRisk": "low",
        "dedupeNote": "非VLA/WAM核心，但触觉感知对操作有增量价值。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video"
        ]
      },
      {
        "id": "2606.09640v1",
        "title": "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics",
        "summary": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a…",
        "summaryRaw": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a single additive residual, but do not preserve the internal mechanical structure of Euler--Lagrange systems. This leads to models that do not preserve symmetry, positive-definiteness, or the coupling between inertia and velocity-dependent terms, which can result in physically inconsistent predictions and reduced reliability when embedded in model-based controllers. We propose a structure-preserving residual learning framework that decomposes model mismatch into an inertia correction, the corresponding induced Coriolis term, and a generalized-force residual. The mechanical component is learned under physical constraints, while the disturbance-sensitive component is represented through a sparse history-dependent latent interaction model and adapted online using Bayesian linear regression. This separation preserves key mechanical structure while restricting adaptation to the part of the dynamics most affected by changing conditions. Experiments across multiple robotic platforms, including mobile, aerial, and manipulator systems, show that the proposed method improves dynamics prediction and trajectory tracking under coupled and time-varying dynamics. These results highlight the value of combining structured residual modeling, compact latent interaction selection, and selective online adaptation for real-world model-based control.",
        "link": "https://arxiv.org/abs/2606.09640v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09640v1",
        "published": "2026-06-08T15:36:00Z",
        "updated": "2026-06-08T15:36:00Z",
        "authors": [
          "Rishabh Dev Yadav",
          "Samaksh Ujjawal",
          "Sihao Sun",
          "Spandan Roy",
          "Wei Pan"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 70,
        "importanceLevel": "B",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 70,
          "novelty": 72,
          "impact": 75,
          "practicality": 70,
          "coreAlignment": 65
        },
        "oneSentenceSummary": "结构保持残差学习与在线自适应机器人动力学。",
        "summaryCn": "提出物理感知稀疏学习框架，将模型失配分解为惯性校正和诱导科里奥利项，保持正定性。结合稀疏诱导正则和选择性在线自适应，实现高效长期预测。",
        "whyImportant": "提升机械臂动力学模型精度，支撑模型基控制与规划。",
        "reasonTags": [
          "动力学建模",
          "物理感知",
          "残差学习"
        ],
        "innovationPoints": [
          "结构保持分解保持物理一致性",
          "稀疏学习与在线自适应"
        ],
        "noveltyVerdict": "改进动力学残差学习，保持欧拉-拉格朗日结构。",
        "duplicateRisk": "medium",
        "dedupeNote": "聚焦经典控制理论，不同于学习世界模型。",
        "retrievalGroups": [
          "category",
          "robotics",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics"
        ]
      },
      {
        "id": "2606.09507v1",
        "title": "Prisma-World: Camera-Controllable Multi-Agent Video World Model",
        "summary": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of…",
        "summaryRaw": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of the same scene, leading to inconsistent objects, layouts, and appearances across agents. Conventional camera conditioning controls individual trajectories, but it does not explicitly couple the generation of views that should agree under shared scene geometry. We introduce Prisma-World, a camera-controllable multi-agent world model that formulates multi-agent generation as a joint geometry-aware denoising process for cross-view consistency. Prisma-World processes all agent videos within one full-attention sequence, uses a multi-agent RoPE design to distinguish agent identities while preserving synchronized temporal coordinates, and injects relative camera geometry into attention to bias overlapping viewpoints toward shared scene evidence. To further strengthen multi-view consistency and enhance global spatial perception, we augment our framework with an overlap-decaying curriculum training paradigm alongside minimap-conditioned structural guidance. To facilitate the training and evaluation of multi-agent models, we introduce PrismaDataset, a large-scale UE5 dataset with panoramic acquisition across diverse scenes, composable multi-agent view groups with flexible agent counts and complex camera trajectories, and precise camera/action annotations for consistency training and evaluation. Experiments show that a single Prisma-World model can generate high-fidelity multi-agent videos with flexible agent numbers, camera controllability, improved cross-view consistency, and spatial grounding under minimap guidance.",
        "link": "https://arxiv.org/abs/2606.09507v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09507v1",
        "published": "2026-06-08T13:59:50Z",
        "updated": "2026-06-08T13:59:50Z",
        "authors": [
          "Huiqiang Sun",
          "Zhan Peng",
          "Size Wu",
          "Kun Wang",
          "Kang Liao",
          "Dianyi Wang",
          "Xingyu Zeng",
          "Sheng Jin"
        ],
        "categories": [
          "cs.CV"
        ],
        "score": 70,
        "importanceLevel": "B",
        "lane": "WAM",
        "dimensionScores": {
          "relevance": 70,
          "novelty": 85,
          "impact": 65,
          "practicality": 60,
          "coreAlignment": 70
        },
        "oneSentenceSummary": "相机可控多智能体视频世界模型，保证跨视图一致性。",
        "summaryCn": "提出Prisma-World，通过联合几何感知去噪过程生成多智能体视频，使用多智能体RoPE区分视角，保证重叠区域场景对象一致，支持可控相机运动的多智能体视觉模拟。",
        "whyImportant": "实现多智能体3D一致世界模拟，可用于协同场景生成。",
        "reasonTags": [
          "多智能体",
          "视频世界模型",
          "跨视图一致"
        ],
        "innovationPoints": [
          "联合去噪保证几何一致性",
          "多智能体RoPE视角编码",
          "相机可控"
        ],
        "noveltyVerdict": "首次将几何一致性引入多智能体视频生成世界模型。",
        "duplicateRisk": "low",
        "dedupeNote": "专注多智能体一致性，区别于单视图世界模型。",
        "retrievalGroups": [
          "category",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Prisma-World: Camera-Controllable Multi-Agent Video World Model"
        ]
      },
      {
        "id": "2606.09286v1",
        "title": "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands",
        "summary": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap.",
        "summaryRaw": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap. They rely heavily on dense reference trajectories and perfect state observability, which inherently limits physical generalization. We present Vision Guided Agile Interaction Control (VAIC), a unified framework that bridges this gap by operating exclusively on onboard depth, historical proprioception, and a decoupled user command interface. VAIC employs a two-stage distillation paradigm. First, a privileged teacher policy masters diverse interaction skills using precise object kinematics and exact environmental states. Second, a deployable student policy distills these capabilities by replacing full body tracking with velocity targets across multiple axes and an interaction indicator for each frame. The student utilizes a recurrent object adaptation module to implicitly infer unobservable object dynamics from raw depth streams and proprioception. Evaluations and real-world deployments on the humanoid robot demonstrate that a single VAIC policy successfully executes highly diverse dynamic tasks. These tasks include box carrying, cart interaction, and skateboarding, consistently outperforming baselines and advancing autonomous humanoid deployment.",
        "link": "https://arxiv.org/abs/2606.09286v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09286v1",
        "published": "2026-06-08T09:52:55Z",
        "updated": "2026-06-08T09:52:55Z",
        "authors": [
          "Dongting Li",
          "Qianyang Wu",
          "Xingyu Chen",
          "Liang Li",
          "Yuhang Lin",
          "Sikai Wu",
          "Guoyao Zhang",
          "Mingliang Zhou"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 69,
        "importanceLevel": "B",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 65,
          "novelty": 78,
          "impact": 70,
          "practicality": 70,
          "coreAlignment": 55
        },
        "oneSentenceSummary": "解耦命令的视觉引导人形灵动物体交互控制。",
        "summaryCn": "提出VAIC，用两阶段蒸馏范式从特权老师策略蒸馏到仅需深度、历史本体感和解耦命令的学生策略。实现人形机器人敏捷交互。",
        "whyImportant": "仅依赖机载传感器实现人形灵活交互，减少真机部署差距。",
        "reasonTags": [
          "人形控制",
          "视觉引导",
          "蒸馏"
        ],
        "innovationPoints": [
          "两步蒸馏从全状态到部分可观测",
          "速度目标取代全身跟踪"
        ],
        "noveltyVerdict": "有效缩小仿真到真实差距的人形控制框架。",
        "duplicateRisk": "low",
        "dedupeNote": "聚焦人形交互控制，非VLA。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands"
        ]
      },
      {
        "id": "2606.09559v1",
        "title": "Safe-RULE: Safe Reinforcement UnLEarning",
        "summary": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induc…",
        "summaryRaw": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induce unsafe policy behavior. In this work, we propose a new learning paradigm, named safe reinforcement unlearning (Safe-RULE), used as a defense framework to remove the influence of poisoned data without retraining from scratch or requiring access to the original training environment. We further extend reinforcement unlearning to offline Safe RL by explicitly accounting for both task performance and safety constraints during the unlearning process. Experiments across benchmark Safe RL tasks demonstrate that our approach effectively enhances safety performance against data poisoning attacks.",
        "link": "https://arxiv.org/abs/2606.09559v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09559v1",
        "published": "2026-06-08T14:33:40Z",
        "updated": "2026-06-08T14:33:40Z",
        "authors": [
          "Shixiong Jiang",
          "Taozheng Zhu",
          "Fanxin Kong"
        ],
        "categories": [
          "cs.AI",
          "cs.LG",
          "cs.RO"
        ],
        "score": 68,
        "importanceLevel": "B",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 65,
          "novelty": 75,
          "impact": 70,
          "practicality": 70,
          "coreAlignment": 55
        },
        "oneSentenceSummary": "安全强化遗忘学习，防御离线安全RL数据投毒。",
        "summaryCn": "提出Safe-RULE，移除毒化数据影响无需从头训练，在离线安全RL中同时考虑任务表现和安全约束进行遗忘学习。提升安全性能。",
        "whyImportant": "强化学习安全性，抵御数据攻击，提升策略安全。",
        "reasonTags": [
          "安全RL",
          "遗忘学习",
          "数据投毒"
        ],
        "innovationPoints": [
          "安全强化遗忘范式",
          "无需环境交互的防御"
        ],
        "noveltyVerdict": "引入遗忘学习至安全RL，新颖防御范式。",
        "duplicateRisk": "low",
        "dedupeNote": "聚焦安全防御，非VLA/WAM核心。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Safe-RULE: Safe Reinforcement UnLEarning"
        ]
      },
      {
        "id": "2606.09569v1",
        "title": "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications",
        "summary": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness.",
        "summaryRaw": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness. Existing methods, however, often involve high computational costs and rely heavily on abundant feature matches, limiting their applicability in time-sensitive driving scenarios. To address these limitations, this paper introduces a unified framework for efficient relative pose estimation, built upon a novel translation parameterization and first-order rotation approximation. Within this framework, we propose three efficient minimal solvers specifically designed for autonomous vehicles. The first solver integrates the vertical direction prior from Inertial Measurement Units (IMUs), the second utilizes the rotation axis direction prior during steering maneuvers, and the third is designed for planar motion - a realistic assumption for ground vehicles operating on structured roads. By reducing both the minimal number of point correspondences and the algebraic complexity, our methods enable faster hypothesis generation within RANSAC-based pipelines, improving suitability for real-time systems. Extensive experiments on synthetic datasets and the KITTI autonomous driving benchmark demonstrate that the proposed solvers achieve a favorable balance between speed and accuracy compared to existing state-of-the-art algorithms.",
        "link": "https://arxiv.org/abs/2606.09569v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09569v1",
        "published": "2026-06-08T14:43:53Z",
        "updated": "2026-06-08T14:43:53Z",
        "authors": [
          "Tao Li",
          "Liang Liu",
          "Jianli Han",
          "Weimin Lv"
        ],
        "categories": [
          "cs.CV",
          "cs.RO"
        ],
        "score": 74,
        "importanceLevel": "A",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 39,
          "novelty": 22,
          "impact": 14,
          "practicality": 8,
          "coreAlignment": 25
        },
        "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
        "summaryCn": "论文核心内容是：With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and…",
        "whyImportant": "命中机器人、自动驾驶、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
        "reasonTags": [
          "机器人",
          "自动驾驶",
          "新基准",
          "通用框架"
        ],
        "innovationPoints": [
          "包含新基准或新数据评测"
        ],
        "noveltyVerdict": "创新信号强，像是带新范式或新基准的工作。",
        "duplicateRisk": "low",
        "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
        "retrievalGroups": [
          "category",
          "driving",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications"
        ]
      },
      {
        "id": "2606.09499v1",
        "title": "Targeting World Models to Compromise Robot Learning Pipelines",
        "summary": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models i…",
        "summaryRaw": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models introduce a uniquely stealthy and effective data poisoning entry point into the robot learning supply chain that can result in the deployment of unsafe or otherwise compromised robotic policies despite training on seemingly safe ground truth training data. In contrast to traditional data poisoning techniques which directly implant dangerous trajectories into sold or uploaded datasets, our novel attack methods inject malicious prompts or compromising transition dynamics into visibly safe teleoperated datasets which are only activated once fed through a world model as input. This can result in the generation of synthetic, dangerous robot training trajectories and subsequently unsafe or compromised robot policies. We demonstrate the effectiveness of our attacks against both state of the art action conditioned and text conditioned world models, showing a full end-to-end backdoor on a downstream DRL policy and a proof-of-concept for the VLA setting. Overall these findings necessitate research into more secure world models and reevaluating their position within the robot learning supply chain.",
        "link": "https://arxiv.org/abs/2606.09499v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09499v1",
        "published": "2026-06-08T13:50:31Z",
        "updated": "2026-06-08T13:50:31Z",
        "authors": [
          "Ethan Rathbun",
          "Ahmed Agha",
          "Saaduddin Mahmud",
          "Christopher Amato",
          "Alina Oprea",
          "Eugene Bagdasarian"
        ],
        "categories": [
          "cs.AI",
          "cs.RO"
        ],
        "score": 72,
        "importanceLevel": "A",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 47,
          "novelty": 12,
          "impact": 9,
          "practicality": 13,
          "coreAlignment": 25
        },
        "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
        "summaryCn": "论文核心内容是：World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating…",
        "whyImportant": "命中VLA、WAM、机器人、新基准主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
        "reasonTags": [
          "VLA",
          "WAM",
          "机器人",
          "新基准"
        ],
        "innovationPoints": [
          "包含新基准或新数据评测"
        ],
        "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
        "duplicateRisk": "low",
        "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
        "retrievalGroups": [
          "category",
          "robotics",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Targeting World Models to Compromise Robot Learning Pipelines"
        ]
      },
      {
        "id": "2606.09218v1",
        "title": "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM",
        "summary": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges t…",
        "summaryRaw": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges to traditional synchronous, frame-based algorithms. To address these challenges, this paper presents a novel framework for full degree of freedom (DoF) egomotion estimation directly from asynchronous optical flow, specifically targeting the joint recovery of angular and linear velocities. We decouple the differential epipolar constraint into distinct angular and linear velocity components, and derive its formulation for asynchronous data. Based on this formulation, an optimization algorithm is developed that enables full-DoF egomotion estimation leveraging at least five points. Furthermore, by applying a first-order approximation to rotational dynamics, we transform the constraint equations into a polynomial form, resulting in the first algebraic minimal 5-point solver for this formulation. To ensure real-time performance in high-speed scenarios, we additionally propose an accelerated solver achieved by truncating high-order angular velocity terms. Extensive evaluations on both synthetic and real-world datasets demonstrate that the asynchronous approach outperforms traditional synchronous methods, particularly in its accuracy and robustness to spatiotemporal noise. We believe that this work establishes a critical foundation for efficient and accurate continuous-time motion estimation in high-speed robotics applications.",
        "link": "https://arxiv.org/abs/2606.09218v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09218v1",
        "published": "2026-06-08T08:51:29Z",
        "updated": "2026-06-08T08:51:29Z",
        "authors": [
          "Shuo Pan",
          "Banglei Guan",
          "Bin Li",
          "Zhenbao Yu",
          "Zibin Liu",
          "Zi Wang",
          "Yang Shang",
          "Qifeng Yu"
        ],
        "categories": [
          "cs.CV"
        ],
        "score": 61,
        "importanceLevel": "A",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 30,
          "novelty": 17,
          "impact": 9,
          "practicality": 8,
          "coreAlignment": 11
        },
        "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
        "summaryCn": "论文核心内容是：As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal…",
        "whyImportant": "命中机器人、新基准、通用框架、真实实验主题，分类覆盖cs.CV，并体现较强的新颖性与影响潜力。",
        "reasonTags": [
          "机器人",
          "新基准",
          "通用框架",
          "真实实验"
        ],
        "innovationPoints": [
          "包含新基准或新数据评测",
          "提供真实场景实验验证"
        ],
        "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
        "duplicateRisk": "low",
        "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM"
        ]
      },
      {
        "id": "2606.09268v1",
        "title": "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation",
        "summary": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide d…",
        "summaryRaw": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide direct metric measurements. However, such multi-sensor configurations necessitate complex spatial-temporal calibration and increase deployment overhead. Although vision-only approaches offer a low-cost and scalable alternative, existing monocular visual systems typically struggle to simultaneously achieve efficient, globally consistent localization and dense, metric-consistent geometric perception. To bridge this gap, we propose \\textbf{VGP-Nav}, a unified framework for \\textit{Metric-Aware Visual Geometric Perception} that relies solely on monocular RGB input to jointly support metric localization and obstacle perception. Our key insight is to anchor localization-grounded visual geometry to physically meaningful scale constraints derived from ground-plane geometry, thereby providing a reliable metric reference for monocular perception. VGP-Nav resolves monocular scale ambiguity online and produces localization-grounded, metric obstacle representations that are directly applicable to downstream planning. Extensive experiments demonstrate strong generalization across diverse environments and successful deployment on real mobile robots, highlighting the practicality of our approach for scalable, low-cost, and safe autonomous navigation.",
        "link": "https://arxiv.org/abs/2606.09268v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09268v1",
        "published": "2026-06-08T09:38:14Z",
        "updated": "2026-06-08T09:38:14Z",
        "authors": [
          "Hewei Pan",
          "Weiye Zhu",
          "Zekai Zhang",
          "Zitong Huang",
          "Rongtao Xu",
          "Jinbao Wang",
          "Feng Zheng"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 58,
        "importanceLevel": "A",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 29,
          "novelty": 16,
          "impact": 6,
          "practicality": 13,
          "coreAlignment": 14
        },
        "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
        "summaryCn": "论文核心内容是：Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obst…",
        "whyImportant": "命中机器人、通用框架主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
        "reasonTags": [
          "机器人",
          "通用框架"
        ],
        "innovationPoints": [
          "提出具有跟踪价值的方法设计"
        ],
        "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
        "duplicateRisk": "low",
        "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation"
        ]
      }
    ],
    "vla": [
      {
        "id": "2606.09572v1",
        "title": "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control",
        "summary": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient tas…",
        "summaryRaw": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient task-conditioned visuomotor control. CT-VAM acts as a compact local execution policy that predicts action chunks from dualview visual observations, proprioception, and a lightweight task condition, potentially enabling a practical cloud-edge paradigm in which high-level semantic reasoning can be handled by large models while fast closed-loop control runs on local hardware. To fuse heterogeneous inputs effectively, CT-VAM introduces TARS (Thalamic Action Routing Stream), a stream-separated conditional attention decoder that independently routes action, visual and task streams, preventing dense sensory tokens from overwhelming compact task-relevant conditions. With only 68M parameters, CT-VAM achieves LIBERO success rates competitive with substantially larger VLA models, while reducing inference latency. Together with flow-consistent inpainting for asynchronous chunk execution, CT-VAM supports high-frequency control and demonstrates robust realworld deployment on resource-constrained robotic platforms.",
        "link": "https://arxiv.org/abs/2606.09572v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09572v1",
        "published": "2026-06-08T14:46:43Z",
        "updated": "2026-06-08T14:46:43Z",
        "authors": [
          "Jiacheng Li",
          "Yize Guo",
          "Jiabin Guo",
          "Qingchen Liu",
          "Jiahu Qin"
        ],
        "categories": [
          "cs.AI",
          "cs.RO"
        ],
        "score": 95,
        "importanceLevel": "S",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 95,
          "novelty": 93,
          "impact": 88,
          "practicality": 90,
          "coreAlignment": 96
        },
        "oneSentenceSummary": "受小脑-丘脑启发的视觉动作模型，实现高效任务条件视觉运动控制。",
        "summaryCn": "提出CT-VAM，通过双视图视觉、本体感知和轻量级任务条件预测动作块。引入TARS流分离条件注意力解码器，独立路由动作、视觉和本体感知token。支持云端大模型高层推理与本地快速闭环控制协同。",
        "whyImportant": "实现高效视觉运动控制，分离高层推理与低频执行，推动云端-边缘架构。",
        "reasonTags": [
          "视觉动作模型",
          "端侧高效推理",
          "小脑-丘脑启发"
        ],
        "innovationPoints": [
          "小脑-丘脑启发式架构解耦任务意图与实时控制",
          "TARS流分离条件注意力，独立路由多模态输入",
          "轻量级本地策略支持高频闭环控制"
        ],
        "noveltyVerdict": "架构新颖，将生物启发引入VLA，分离推理与控制。",
        "duplicateRisk": "low",
        "dedupeNote": "首次从神经科学角度设计VLA解耦架构。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control"
        ]
      },
      {
        "id": "2606.09009v1",
        "title": "Scaling by Diversified Experience for Vision-Language-Action Models",
        "summary": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences.",
        "summaryRaw": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences. We propose an Intention Decoupling algorithm to isolate control-relevant features from reasoning contexts and a similar-sample guided RL pipeline to stabilize policy updates and mitigate distribution shift. Extensive experiments on real-world robotic tasks and multi-modal benchmarks demonstrate that SyVLA achieves superior task success rates and stronger out-of-distribution generalization compared to existing methods, while effectively preserving core vision-language capabilities. Codes and Datasets is released on \\href{https://sy-vla.github.io/}{project page}.",
        "link": "https://arxiv.org/abs/2606.09009v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09009v1",
        "published": "2026-06-08T04:13:38Z",
        "updated": "2026-06-08T04:13:38Z",
        "authors": [
          "Leiyu Wang",
          "Zhaofengnian Wang",
          "Xueqi Li",
          "Luoyi Fan",
          "Cewu Lu",
          "Nanyang Ye"
        ],
        "categories": [
          "cs.CV"
        ],
        "score": 94,
        "importanceLevel": "S",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 90,
          "novelty": 91,
          "impact": 85,
          "practicality": 82,
          "coreAlignment": 92
        },
        "oneSentenceSummary": "通过多样化经验训练鲁棒VLA模型，解耦意图与稳定策略优化。",
        "summaryCn": "提出SyVLA，利用多样化经验和意图解耦算法隔离控制相关特征，以及相似样本引导的RL管道稳定策略更新。在真实机器人任务和多模态基准上展示优越泛化能力。",
        "whyImportant": "解决VLA高层推理与低层控制纠缠，提升分布外泛化。",
        "reasonTags": [
          "多样化经验",
          "意图解耦",
          "鲁棒VLA"
        ],
        "innovationPoints": [
          "意图解耦算法隔离推理与控制特征",
          "相似样本引导RL稳定训练，缓解分布偏移"
        ],
        "noveltyVerdict": "在VLA训练策略上创新，有效提升鲁棒性。",
        "duplicateRisk": "low",
        "dedupeNote": "将意图解耦与RL稳定化结合，区别于纯模仿学习。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Scaling by Diversified Experience for Vision-Language-Action Models"
        ]
      },
      {
        "id": "2606.09337v1",
        "title": "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation",
        "summary": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies.",
        "summaryRaw": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies. When contact conditions shift from the training distribution, the policy cannot perform online adaptation, leading to problems such as inappropriate contact forces and inefficient retries. Therefore, we propose TORL-VLA, a tactile-guided online reinforcement learning framework that couples tactile feedback with policy refinement for contact-rich manipulation. Our method introduces a tactile-derived wrench-aware VLA to predict reference actions and future wrench sequences, while a lightweight online RL module is used to refine the reference actions. To stabilize learning from mixed exploratory policy-generated and human-intervention data, we introduce an intervention-censored critic that prevents post-intervention success from being wrongly credited to policy-generated actions preceding intervention. Real-robot experiments on long-horizon contact-rich tasks, including latch manipulation, coffee-cup placement, and egg handling, show that TORL-VLA improves success rates at both subtask and full-task levels, as well as time-bounded execution efficiency over strong baselines.",
        "link": "https://arxiv.org/abs/2606.09337v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09337v1",
        "published": "2026-06-08T11:05:05Z",
        "updated": "2026-06-08T11:05:05Z",
        "authors": [
          "Huaihang Zheng",
          "Yi Yang",
          "Kai Ma",
          "Shenglin Xu",
          "Tian Xie",
          "Guozheng Li",
          "Xiangyu Wang",
          "Yiren Ma"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 85,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 88,
          "novelty": 80,
          "impact": 75,
          "practicality": 78,
          "coreAlignment": 86
        },
        "oneSentenceSummary": "触觉引导在线强化学习用于接触丰富操作的VLA。",
        "summaryCn": "提出TORL-VLA，结合触觉衍生力觉感知VLA预测参考动作和未来力序列，并用轻量在线RL模块优化参考动作。通过混合探索策略和在线学习稳定训练。",
        "whyImportant": "引入触觉反馈在线RL，提升VLA在接触任务中的适应能力。",
        "reasonTags": [
          "触觉反馈",
          "在线RL",
          "接触丰富操作"
        ],
        "innovationPoints": [
          "触觉-力觉感知VLA预测动作和力序列",
          "在线RL模块在部署时微调策略"
        ],
        "noveltyVerdict": "将触觉与在线RL融入VLA，增强接触任务鲁棒性。",
        "duplicateRisk": "medium",
        "dedupeNote": "区别于离线VLA，专注在线RL细调，触觉信息驱动。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation"
        ]
      },
      {
        "id": "2606.09630v1",
        "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
        "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer t…",
        "summaryRaw": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses it as a semantic reward selector: it predicts a recovery descriptor and reward mask for in-simulation residual-policy training, followed by zero-shot sim-to-real deployment of the trained recovery policies. This decouples high-level failure understanding from low-level corrective control to support different VLAs. Experiments across short-horizon, long-horizon, and contact-rich manipulation tasks show that ReCoVLA outperforms the tested baselines on average. In simulation, our reward compiler improves average success from 36.7% for the fine-tuned $π_{0.5}$ baseline to 66.7%. In physical zero-shot sim-to-real experiments, ReCoVLA achieves the best average performance, with 61.7% success.",
        "link": "https://arxiv.org/abs/2606.09630v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
        "published": "2026-06-08T15:29:09Z",
        "updated": "2026-06-08T15:29:09Z",
        "authors": [
          "Haodi Hu",
          "Chung-Ta Huang",
          "Jing Liu",
          "Ye Wang",
          "Kei Suzuki",
          "Matthew Brand",
          "Toshiaki Koike-Akino"
        ],
        "categories": [
          "cs.AI",
          "cs.LG",
          "cs.RO"
        ],
        "score": 82,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 85,
          "novelty": 82,
          "impact": 80,
          "practicality": 75,
          "coreAlignment": 86
        },
        "oneSentenceSummary": "VLM引导奖励编译实现VLA策略的失败恢复。",
        "summaryCn": "提出ReCoVLA，冻结预训练VLA，用外部VLM推断失败模式，编译任务相关奖励用于残差策略训练，零样本仿真到真实迁移。解耦高层失败理解与低层校正控制。",
        "whyImportant": "用VLM编译奖励，实现通用失败恢复，不修改VLA模型。",
        "reasonTags": [
          "失败恢复",
          "VLM",
          "奖励编译"
        ],
        "innovationPoints": [
          "VLM作为语义奖励选择器指导残差策略训练",
          "仿真到真实零样本迁移恢复策略"
        ],
        "noveltyVerdict": "利用VLM的语义理解规划恢复，无需修改原VLA。",
        "duplicateRisk": "medium",
        "dedupeNote": "不同于内嵌恢复模块，采用外部VLM生成恢复奖励。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies"
        ]
      },
      {
        "id": "2606.09258v1",
        "title": "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection",
        "summary": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences.",
        "summaryRaw": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences. We propose Back to the Familiar Future (B2FF), a recovery framework for foresight-driven VLAs that leverages future visual conditioning as a recovery interface. Before execution, the VLA generates a milestone bank of familiar future states conditioned on the clean initial observation. At recovery time, a recoverability-aware selector selects a recovery milestone from this bank and enforces it as a fixed visual goal. This enables the VLA to robustly map off-trajectory observations back to a familiar future. On failure-injected LIBERO, under controlled recovery timing aligned with the injected failure, B2FF increases the average success rate of a baseline VLA from 56.3% to 74.0%, demonstrating that pre-imagined milestones can guide recovery without fine-tuning the low-level action generator.",
        "link": "https://arxiv.org/abs/2606.09258v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09258v1",
        "published": "2026-06-08T09:30:38Z",
        "updated": "2026-06-08T09:30:38Z",
        "authors": [
          "Suyeon Shin",
          "Juwon Kim",
          "Hyeonbin Park",
          "Hyunseo Kim",
          "Hyundo Lee",
          "Hyung-Sin Kim",
          "Byoung-Tak Zhang"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 80,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 83,
          "novelty": 78,
          "impact": 72,
          "practicality": 75,
          "coreAlignment": 84
        },
        "oneSentenceSummary": "通过预想象里程碑选择实现VLA策略失败恢复。",
        "summaryCn": "提出B2FF，在干净初始观察条件生成熟悉未来状态里程碑库，恢复时用可恢复性感知选择器选取里程碑作为固定视觉目标，将脱轨观测映射回熟悉未来。",
        "whyImportant": "利用未来视觉条件化实现VLA策略的可靠失败恢复。",
        "reasonTags": [
          "失败恢复",
          "视觉里程碑",
          "VLA"
        ],
        "innovationPoints": [
          "预想象熟悉未来状态作为恢复界面",
          "可恢复性选择器确保有效里程碑"
        ],
        "noveltyVerdict": "创新地使用预生成视觉目标引导故障恢复。",
        "duplicateRisk": "medium",
        "dedupeNote": "与ReCoVLA不同，B2FF依赖VLA自身的未来视觉想象。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection"
        ]
      },
      {
        "id": "2606.08992v1",
        "title": "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning",
        "summary": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on…",
        "summaryRaw": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on local visual cues and linear history-based reasoning, overlooking the spatial nature of navigation across explored regions, traversed paths, landmarks, and their spatial relations. In this paper, we propose SpaceVLN, a navigation agent built around Spatial Cognitive Memory and Task-Guided Spatial Reasoning. Specifically, SpaceVLN introduces an efficient stagewise closed-loop framework where planning and execution are organized around verifiable space--landmark stages. During navigation, the agent progressively abstracts explored regions into Spatial Waypoints and dynamically maintains subtask-grounded landmark evidence, forming a hierarchical Spatial Cognitive Memory for progress localization and spatial-relation understanding. Built on this memory, Spatial-CoT integrates task-progress reasoning with spatial perception, analysis, and prediction, enabling Task-Guided Spatial Reasoning for embodied navigation. The unified stage interface enables SpaceVLN to address both Vision-and-Language Navigation and Object-Goal Navigation under a unified zero-shot setting, without task-specific policy training. Across R2R-CE, RxR-CE, GN-Bench, and HM3D-OVON, SpaceVLN achieves state-of-the-art zero-shot performance, and real-robot deployment further validates its applicability. These results highlight Spatial Cognitive Memory and Task-Guided Spatial Reasoning as a practical foundation for stronger embodied navigation agents.",
        "link": "https://arxiv.org/abs/2606.08992v1",
        "pdfLink": "https://arxiv.org/pdf/2606.08992v1",
        "published": "2026-06-08T03:42:08Z",
        "updated": "2026-06-08T03:42:08Z",
        "authors": [
          "Yucheng Deng",
          "Pingrui Lai",
          "Xinhai Li",
          "Chenjia Bai",
          "Xiaoheng Deng",
          "Chengnuo Sun",
          "Xuelong Li",
          "Hua Yang"
        ],
        "categories": [
          "cs.AI",
          "cs.CV",
          "cs.RO"
        ],
        "score": 78,
        "importanceLevel": "A",
        "lane": "VLA",
        "dimensionScores": {
          "relevance": 75,
          "novelty": 80,
          "impact": 82,
          "practicality": 80,
          "coreAlignment": 70
        },
        "oneSentenceSummary": "零样本视觉-语言导航代理，具有在线空间认知记忆与推理。",
        "summaryCn": "提出SpaceVLN，围绕空间认知记忆和任务引导空间推理，采用阶段式闭环框架，将规划与执行组织到可验证的空间地标阶段。渐进构建空间路点图，实现高效零样本导航。",
        "whyImportant": "在连续环境中实现零样本语言导航，提升空间推理能力。",
        "reasonTags": [
          "视觉语言导航",
          "空间推理",
          "零样本"
        ],
        "innovationPoints": [
          "空间认知记忆抽象探索区域为路点",
          "任务引导的空间推理规划",
          "阶段式闭环框架验证规划"
        ],
        "noveltyVerdict": "将空间记忆与推理融入VLN，提升复杂环境导航。",
        "duplicateRisk": "low",
        "dedupeNote": "专注导航的空间认知模型，不同于操作VLA。",
        "retrievalGroups": [
          "category",
          "robotics"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning"
        ]
      }
    ],
    "wam": [
      {
        "id": "2606.09215v1",
        "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
        "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a h…",
        "summaryRaw": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces and reducing the legs to balance-preserving locomotion. We present MotionWAM, a real-time WAM that drives autonomous humanoid loco-manipulation from a single egocentric camera by conditioning the policy on the intermediate denoising features of a video world model. MotionWAM replaces the upper-lower split with a unified motion latent and predicts whole-body motion tokens that jointly cover locomotion, torso motion, height regulation, foot interaction, and hand manipulation in a single action space. A three-stage learning framework progressively adapts the video world model to egocentric visual dynamics and to the target humanoid embodiment. On nine real-world Unitree G1 tasks, MotionWAM runs in real time, substantially outperforms Vision-Language-Action (VLA) baselines fine-tuned on the same demonstrations by over 30% in overall success rate, and executes task-driven foot interaction that decoupled upper-lower policies cannot reach. Our results suggest that video-pretrained WAMs can be lifted from tabletop manipulation to coordinated, human-like whole-body humanoid control.",
        "link": "https://arxiv.org/abs/2606.09215v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
        "published": "2026-06-08T08:50:14Z",
        "updated": "2026-06-08T08:50:14Z",
        "authors": [
          "Jia Zheng",
          "Teli Ma",
          "Yudong Fan",
          "Zifan Wang",
          "Shuo Yang",
          "Junwei Liang"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 95,
        "importanceLevel": "S",
        "lane": "Both",
        "dimensionScores": {
          "relevance": 92,
          "novelty": 90,
          "impact": 88,
          "practicality": 80,
          "coreAlignment": 94
        },
        "oneSentenceSummary": "实时世界动作模型驱动人形机器人全身移动操作。",
        "summaryCn": "提出MotionWAM，从单目相机实时驱动人形移动操作。用统一运动潜变量取代上下半身分割，预测全身运动token，并利用视频世界模型的中间去噪特征条件化策略，实现实时性。",
        "whyImportant": "首次实现实时世界动作模型用于人形机器人，提升全身协调。",
        "reasonTags": [
          "世界动作模型",
          "人形机器人",
          "实时控制"
        ],
        "innovationPoints": [
          "实时WAM通过统一运动潜变量实现全身协调",
          "条件化策略于去噪特征，避免高维扩散延迟",
          "端到端单目驱动移动操作"
        ],
        "noveltyVerdict": "突破WAM实时性瓶颈，针对高自由度人形机器人。",
        "duplicateRisk": "low",
        "dedupeNote": "专注人形全身移动操作，不同于桌面操作WAM。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation"
        ]
      },
      {
        "id": "2606.08962v1",
        "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
        "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive.",
        "summaryRaw": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process. Existing acceleration methods reduce this cost by caching and reusing computation within a single chunk's denoising trajectory. Our empirical analysis reveals a substantial source of redundancy they overlook: redundancy across chunks. When a robot executes a smooth behavior, the residuals computed at a given denoising step are strongly correlated from one chunk to the next. We introduce C$^3$ache, a training-free method that caches and reuses these residuals across inference chunks at the same denoising step. Experiments on benchmarks with a Fast-WAM backbone show that C$^3$ache achieves up to a $2.5\\times$ speedup in total wall-clock inference time, with negligible degradation in task success rate.",
        "link": "https://arxiv.org/abs/2606.08962v1",
        "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
        "published": "2026-06-08T03:01:10Z",
        "updated": "2026-06-08T03:01:10Z",
        "authors": [
          "Weisen Zhao",
          "Lam Nguyen",
          "Zhicong Lu",
          "Yuzhang Shang"
        ],
        "categories": [
          "cs.CV",
          "cs.LG",
          "cs.RO"
        ],
        "score": 82,
        "importanceLevel": "A",
        "lane": "Both",
        "dimensionScores": {
          "relevance": 85,
          "novelty": 85,
          "impact": 78,
          "practicality": 88,
          "coreAlignment": 86
        },
        "oneSentenceSummary": "跨推理块缓存加速世界动作模型推理。",
        "summaryCn": "提出C3ache，利用世界动作模型多推理块之间的残差相关性，缓存并复用跨块残差，无需训练即可加速推理，弥补现有方法只重用单块内去噪计算的不足。",
        "whyImportant": "首次利用跨块冗余加速WAM，提高实时性。",
        "reasonTags": [
          "推理加速",
          "世界动作模型",
          "跨块缓存"
        ],
        "innovationPoints": [
          "发现并利用跨块残差相关性实现缓存",
          "训练-free方法，即插即用"
        ],
        "noveltyVerdict": "新颖的跨块缓存策略，显著降低WAM延迟。",
        "duplicateRisk": "low",
        "dedupeNote": "不同于单块内缓存加速，开创跨块冗余利用。",
        "retrievalGroups": [
          "category",
          "robotics",
          "vla_core",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache"
        ]
      },
      {
        "id": "2606.09457v1",
        "title": "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models",
        "summary": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting.",
        "summaryRaw": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting. We introduce $ω$-EVA, a latent interactive world model that realizes an Envision--Verify--Act loop for embodied action generation. Its three-stage framework learns action-conditioned latent dynamics, trains a language-conditioned flow policy on dynamics-aware visual representations, and feeds the policy's proposal back through the world model. A tri-branch refiner jointly reasons over the current state, proposal-conditioned future, and proposed action to produce the final action chunk. Because consequence reasoning remains in latent feature space, $ω$-EVA avoids generating future videos at inference. Evaluations across diverse single-arm, bimanual, long-horizon, and perturbed simulation settings show that the complete interaction pipeline consistently improves the proposal policy, while latent diagnostics indicate meaningful action-conditioned future structure. With approximately 1.2B parameters and no additional robot-data pretraining, $ω$-EVA demonstrates a compact and competitive performance--scale--data trade-off, making the world model an active action-feedback module rather than a passive predictor.",
        "link": "https://arxiv.org/abs/2606.09457v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09457v1",
        "published": "2026-06-08T13:12:56Z",
        "updated": "2026-06-08T13:12:56Z",
        "authors": [
          "Zhenguo Sun",
          "Yu Sun",
          "Hande Huang",
          "Alois Knoll"
        ],
        "categories": [
          "cs.RO"
        ],
        "score": 78,
        "importanceLevel": "A",
        "lane": "WAM",
        "dimensionScores": {
          "relevance": 82,
          "novelty": 80,
          "impact": 72,
          "practicality": 70,
          "coreAlignment": 80
        },
        "oneSentenceSummary": "潜在交互世界模型实现设想-验证-行动循环。",
        "summaryCn": "提出ω-EVA，学习动作条件潜在动态，训练语言条件流策略，将策略提案反馈通过世界模型，由三分支精炼器联合推理当前状态、提案未来和动作，产生最终动作块。",
        "whyImportant": "实现内在设想验证，提升动作生成的可靠性和一致性。",
        "reasonTags": [
          "交互世界模型",
          "设想-验证-行动",
          "潜在动态"
        ],
        "innovationPoints": [
          "设想-验证-行动闭环避免生成未来视频",
          "潜在空间一致性推理"
        ],
        "noveltyVerdict": "将世界模型用于内部动作验证，提升决策质量。",
        "duplicateRisk": "medium",
        "dedupeNote": "区别于生成完整视频的WAM，在潜在空间验证。",
        "retrievalGroups": [
          "category",
          "robotics",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models"
        ]
      },
      {
        "id": "2606.09507v1",
        "title": "Prisma-World: Camera-Controllable Multi-Agent Video World Model",
        "summary": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of…",
        "summaryRaw": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of the same scene, leading to inconsistent objects, layouts, and appearances across agents. Conventional camera conditioning controls individual trajectories, but it does not explicitly couple the generation of views that should agree under shared scene geometry. We introduce Prisma-World, a camera-controllable multi-agent world model that formulates multi-agent generation as a joint geometry-aware denoising process for cross-view consistency. Prisma-World processes all agent videos within one full-attention sequence, uses a multi-agent RoPE design to distinguish agent identities while preserving synchronized temporal coordinates, and injects relative camera geometry into attention to bias overlapping viewpoints toward shared scene evidence. To further strengthen multi-view consistency and enhance global spatial perception, we augment our framework with an overlap-decaying curriculum training paradigm alongside minimap-conditioned structural guidance. To facilitate the training and evaluation of multi-agent models, we introduce PrismaDataset, a large-scale UE5 dataset with panoramic acquisition across diverse scenes, composable multi-agent view groups with flexible agent counts and complex camera trajectories, and precise camera/action annotations for consistency training and evaluation. Experiments show that a single Prisma-World model can generate high-fidelity multi-agent videos with flexible agent numbers, camera controllability, improved cross-view consistency, and spatial grounding under minimap guidance.",
        "link": "https://arxiv.org/abs/2606.09507v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09507v1",
        "published": "2026-06-08T13:59:50Z",
        "updated": "2026-06-08T13:59:50Z",
        "authors": [
          "Huiqiang Sun",
          "Zhan Peng",
          "Size Wu",
          "Kun Wang",
          "Kang Liao",
          "Dianyi Wang",
          "Xingyu Zeng",
          "Sheng Jin"
        ],
        "categories": [
          "cs.CV"
        ],
        "score": 70,
        "importanceLevel": "B",
        "lane": "WAM",
        "dimensionScores": {
          "relevance": 70,
          "novelty": 85,
          "impact": 65,
          "practicality": 60,
          "coreAlignment": 70
        },
        "oneSentenceSummary": "相机可控多智能体视频世界模型，保证跨视图一致性。",
        "summaryCn": "提出Prisma-World，通过联合几何感知去噪过程生成多智能体视频，使用多智能体RoPE区分视角，保证重叠区域场景对象一致，支持可控相机运动的多智能体视觉模拟。",
        "whyImportant": "实现多智能体3D一致世界模拟，可用于协同场景生成。",
        "reasonTags": [
          "多智能体",
          "视频世界模型",
          "跨视图一致"
        ],
        "innovationPoints": [
          "联合去噪保证几何一致性",
          "多智能体RoPE视角编码",
          "相机可控"
        ],
        "noveltyVerdict": "首次将几何一致性引入多智能体视频生成世界模型。",
        "duplicateRisk": "low",
        "dedupeNote": "专注多智能体一致性，区别于单视图世界模型。",
        "retrievalGroups": [
          "category",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Prisma-World: Camera-Controllable Multi-Agent Video World Model"
        ]
      },
      {
        "id": "2606.09499v1",
        "title": "Targeting World Models to Compromise Robot Learning Pipelines",
        "summary": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models i…",
        "summaryRaw": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models introduce a uniquely stealthy and effective data poisoning entry point into the robot learning supply chain that can result in the deployment of unsafe or otherwise compromised robotic policies despite training on seemingly safe ground truth training data. In contrast to traditional data poisoning techniques which directly implant dangerous trajectories into sold or uploaded datasets, our novel attack methods inject malicious prompts or compromising transition dynamics into visibly safe teleoperated datasets which are only activated once fed through a world model as input. This can result in the generation of synthetic, dangerous robot training trajectories and subsequently unsafe or compromised robot policies. We demonstrate the effectiveness of our attacks against both state of the art action conditioned and text conditioned world models, showing a full end-to-end backdoor on a downstream DRL policy and a proof-of-concept for the VLA setting. Overall these findings necessitate research into more secure world models and reevaluating their position within the robot learning supply chain.",
        "link": "https://arxiv.org/abs/2606.09499v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09499v1",
        "published": "2026-06-08T13:50:31Z",
        "updated": "2026-06-08T13:50:31Z",
        "authors": [
          "Ethan Rathbun",
          "Ahmed Agha",
          "Saaduddin Mahmud",
          "Christopher Amato",
          "Alina Oprea",
          "Eugene Bagdasarian"
        ],
        "categories": [
          "cs.AI",
          "cs.RO"
        ],
        "score": 72,
        "importanceLevel": "A",
        "lane": "Robotics",
        "dimensionScores": {
          "relevance": 47,
          "novelty": 12,
          "impact": 9,
          "practicality": 13,
          "coreAlignment": 25
        },
        "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
        "summaryCn": "论文核心内容是：World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating…",
        "whyImportant": "命中VLA、WAM、机器人、新基准主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
        "reasonTags": [
          "VLA",
          "WAM",
          "机器人",
          "新基准"
        ],
        "innovationPoints": [
          "包含新基准或新数据评测"
        ],
        "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
        "duplicateRisk": "low",
        "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
        "retrievalGroups": [
          "category",
          "robotics",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Targeting World Models to Compromise Robot Learning Pipelines"
        ]
      },
      {
        "id": "2606.09312v1",
        "title": "Toward Compiler World Models: Learning Latent Dynamics for Efficient Tensor Program Search",
        "summary": "Tensor program optimization is essential for modern machine learning systems, but its search space is enormous. Existing auto-schedulers reduce measurement cost with learned cost models, yet they usually evaluate each candidate as a static code snapshot, ignoring the schedule trajectory that produced it.",
        "summaryRaw": "Tensor program optimization is essential for modern machine learning systems, but its search space is enormous. Existing auto-schedulers reduce measurement cost with learned cost models, yet they usually evaluate each candidate as a static code snapshot, ignoring the schedule trajectory that produced it. This makes them insensitive to action dependencies and vulnerable to superficial code variations. We propose a \\emph{world-model-inspired} evaluator that models schedule evaluation as action-conditioned latent dynamics over program states. Starting from the initial program, it rolls out scheduling actions in a continuous latent space with a lightweight transition model, avoiding expensive AST mutation and repeated code encoding. The final dynamic representation is combined with action and hardware features to rank candidates. Implemented in TVM AutoScheduler, our method improves representative-subgraph latency over Ansor by 1.37$\\times$ on GPU and 1.54$\\times$ on CPU under the same 64-trial budget. It also matches Ansor-10K within 2.2% geometric mean using 10$\\times$ fewer measurements, and accelerates full-model inference over PyTorch/PyTorch-opt(cuDNN) by 4.61$\\times$/3.67$\\times$ geometric mean.",
        "link": "https://arxiv.org/abs/2606.09312v1",
        "pdfLink": "https://arxiv.org/pdf/2606.09312v1",
        "published": "2026-06-08T10:17:27Z",
        "updated": "2026-06-08T10:17:27Z",
        "authors": [
          "Haolin Pan",
          "Lianghong Huang",
          "Xvlin Zhou",
          "Mingjie Xing",
          "Yanjun Wu"
        ],
        "categories": [
          "cs.LG"
        ],
        "score": 51,
        "importanceLevel": "A",
        "lane": "WAM",
        "dimensionScores": {
          "relevance": 30,
          "novelty": 7,
          "impact": 5,
          "practicality": 11,
          "coreAlignment": 16
        },
        "oneSentenceSummary": "该论文是偏WAM的重点候选，值得优先阅读。",
        "summaryCn": "论文核心内容是：Tensor program optimization is essential for modern machine learning systems, but its search space is enormous.",
        "whyImportant": "命中WAM、新基准主题，分类覆盖cs.LG，并体现较强的新颖性与影响潜力。",
        "reasonTags": [
          "WAM",
          "新基准"
        ],
        "innovationPoints": [
          "提出具有跟踪价值的方法设计"
        ],
        "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
        "duplicateRisk": "low",
        "dedupeNote": "该论文在WAM方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
        "retrievalGroups": [
          "category",
          "wam_core"
        ],
        "mergedCount": 1,
        "mergedTitles": [
          "Toward Compiler World Models: Learning Latent Dynamics for Efficient Tensor Program Search"
        ]
      }
    ]
  },
  "dailyBrief": {
    "overall": "今日亮点：高效VLA模型CT-VAM与SyVLA提升泛化；MotionWAM实现人形实时WAM；C3ache加速WAM推理；多篇VLA失败恢复新方法；灵巧操作提升等。",
    "vla": "VLA进展：CT-VAM生物启发解耦、SyVLA多样化经验训练、TORL-VLA触觉在线RL、ReCoVLA与B2FF失败恢复、SpaceVLN空间导航。",
    "wam": "WAM进展：MotionWAM人形实时控制、C3ache跨块缓存加速、ω-EVA设想-验证-行动闭环、Prisma-World多智能体一致性。",
    "retrieval": "从44篇候选论文中精选16篇核心VLA/WAM/机器人论文。"
  },
  "trendBrief": {
    "windowDays": 5,
    "dateRange": "2026-05-31 - 2026-06-09",
    "overview": "近 5 天累计归档 80 篇总榜论文，主航道重心偏向 边界相关方向，其中 S 级高优先级论文共 6 篇。",
    "hotspots": "高频主题主要集中在 机器人、VLA、世界动作模型，系统共自动合并 0 篇近似工作，减少了重复阅读负担。",
    "vla": "VLA 方向在近几天约占总榜的 35%，重点仍落在通用策略、语言条件动作与具身控制。",
    "wam": "WAM 方向在近几天约占总榜的 22%，更集中于世界模型、动作条件预测与规划建模。",
    "watchlist": "建议优先连续跟踪 机器人、VLA、世界动作模型 相关工作，尤其关注同时具备高新颖性与高落地性的代表论文。"
  },
  "archives": [
    {
      "dateKey": "20260609",
      "dateLabel": "2026-06-09",
      "generatedAt": "2026-06-09T02:37:27.536932+00:00",
      "paperCount": 20,
      "papers": [
        {
          "id": "2606.09572v1",
          "title": "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control",
          "summary": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient tas…",
          "summaryRaw": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient task-conditioned visuomotor control. CT-VAM acts as a compact local execution policy that predicts action chunks from dualview visual observations, proprioception, and a lightweight task condition, potentially enabling a practical cloud-edge paradigm in which high-level semantic reasoning can be handled by large models while fast closed-loop control runs on local hardware. To fuse heterogeneous inputs effectively, CT-VAM introduces TARS (Thalamic Action Routing Stream), a stream-separated conditional attention decoder that independently routes action, visual and task streams, preventing dense sensory tokens from overwhelming compact task-relevant conditions. With only 68M parameters, CT-VAM achieves LIBERO success rates competitive with substantially larger VLA models, while reducing inference latency. Together with flow-consistent inpainting for asynchronous chunk execution, CT-VAM supports high-frequency control and demonstrates robust realworld deployment on resource-constrained robotic platforms.",
          "link": "https://arxiv.org/abs/2606.09572v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09572v1",
          "published": "2026-06-08T14:46:43Z",
          "updated": "2026-06-08T14:46:43Z",
          "authors": [
            "Jiacheng Li",
            "Yize Guo",
            "Jiabin Guo",
            "Qingchen Liu",
            "Jiahu Qin"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 95,
          "importanceLevel": "S",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 95,
            "novelty": 93,
            "impact": 88,
            "practicality": 90,
            "coreAlignment": 96
          },
          "oneSentenceSummary": "受小脑-丘脑启发的视觉动作模型，实现高效任务条件视觉运动控制。",
          "summaryCn": "提出CT-VAM，通过双视图视觉、本体感知和轻量级任务条件预测动作块。引入TARS流分离条件注意力解码器，独立路由动作、视觉和本体感知token。支持云端大模型高层推理与本地快速闭环控制协同。",
          "whyImportant": "实现高效视觉运动控制，分离高层推理与低频执行，推动云端-边缘架构。",
          "reasonTags": [
            "视觉动作模型",
            "端侧高效推理",
            "小脑-丘脑启发"
          ],
          "innovationPoints": [
            "小脑-丘脑启发式架构解耦任务意图与实时控制",
            "TARS流分离条件注意力，独立路由多模态输入",
            "轻量级本地策略支持高频闭环控制"
          ],
          "noveltyVerdict": "架构新颖，将生物启发引入VLA，分离推理与控制。",
          "duplicateRisk": "low",
          "dedupeNote": "首次从神经科学角度设计VLA解耦架构。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control"
          ]
        },
        {
          "id": "2606.09215v1",
          "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
          "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a h…",
          "summaryRaw": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces and reducing the legs to balance-preserving locomotion. We present MotionWAM, a real-time WAM that drives autonomous humanoid loco-manipulation from a single egocentric camera by conditioning the policy on the intermediate denoising features of a video world model. MotionWAM replaces the upper-lower split with a unified motion latent and predicts whole-body motion tokens that jointly cover locomotion, torso motion, height regulation, foot interaction, and hand manipulation in a single action space. A three-stage learning framework progressively adapts the video world model to egocentric visual dynamics and to the target humanoid embodiment. On nine real-world Unitree G1 tasks, MotionWAM runs in real time, substantially outperforms Vision-Language-Action (VLA) baselines fine-tuned on the same demonstrations by over 30% in overall success rate, and executes task-driven foot interaction that decoupled upper-lower policies cannot reach. Our results suggest that video-pretrained WAMs can be lifted from tabletop manipulation to coordinated, human-like whole-body humanoid control.",
          "link": "https://arxiv.org/abs/2606.09215v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
          "published": "2026-06-08T08:50:14Z",
          "updated": "2026-06-08T08:50:14Z",
          "authors": [
            "Jia Zheng",
            "Teli Ma",
            "Yudong Fan",
            "Zifan Wang",
            "Shuo Yang",
            "Junwei Liang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 95,
          "importanceLevel": "S",
          "lane": "Both",
          "dimensionScores": {
            "relevance": 92,
            "novelty": 90,
            "impact": 88,
            "practicality": 80,
            "coreAlignment": 94
          },
          "oneSentenceSummary": "实时世界动作模型驱动人形机器人全身移动操作。",
          "summaryCn": "提出MotionWAM，从单目相机实时驱动人形移动操作。用统一运动潜变量取代上下半身分割，预测全身运动token，并利用视频世界模型的中间去噪特征条件化策略，实现实时性。",
          "whyImportant": "首次实现实时世界动作模型用于人形机器人，提升全身协调。",
          "reasonTags": [
            "世界动作模型",
            "人形机器人",
            "实时控制"
          ],
          "innovationPoints": [
            "实时WAM通过统一运动潜变量实现全身协调",
            "条件化策略于去噪特征，避免高维扩散延迟",
            "端到端单目驱动移动操作"
          ],
          "noveltyVerdict": "突破WAM实时性瓶颈，针对高自由度人形机器人。",
          "duplicateRisk": "low",
          "dedupeNote": "专注人形全身移动操作，不同于桌面操作WAM。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core",
            "wam_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation"
          ]
        },
        {
          "id": "2606.09009v1",
          "title": "Scaling by Diversified Experience for Vision-Language-Action Models",
          "summary": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences.",
          "summaryRaw": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences. We propose an Intention Decoupling algorithm to isolate control-relevant features from reasoning contexts and a similar-sample guided RL pipeline to stabilize policy updates and mitigate distribution shift. Extensive experiments on real-world robotic tasks and multi-modal benchmarks demonstrate that SyVLA achieves superior task success rates and stronger out-of-distribution generalization compared to existing methods, while effectively preserving core vision-language capabilities. Codes and Datasets is released on \\href{https://sy-vla.github.io/}{project page}.",
          "link": "https://arxiv.org/abs/2606.09009v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09009v1",
          "published": "2026-06-08T04:13:38Z",
          "updated": "2026-06-08T04:13:38Z",
          "authors": [
            "Leiyu Wang",
            "Zhaofengnian Wang",
            "Xueqi Li",
            "Luoyi Fan",
            "Cewu Lu",
            "Nanyang Ye"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 94,
          "importanceLevel": "S",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 90,
            "novelty": 91,
            "impact": 85,
            "practicality": 82,
            "coreAlignment": 92
          },
          "oneSentenceSummary": "通过多样化经验训练鲁棒VLA模型，解耦意图与稳定策略优化。",
          "summaryCn": "提出SyVLA，利用多样化经验和意图解耦算法隔离控制相关特征，以及相似样本引导的RL管道稳定策略更新。在真实机器人任务和多模态基准上展示优越泛化能力。",
          "whyImportant": "解决VLA高层推理与低层控制纠缠，提升分布外泛化。",
          "reasonTags": [
            "多样化经验",
            "意图解耦",
            "鲁棒VLA"
          ],
          "innovationPoints": [
            "意图解耦算法隔离推理与控制特征",
            "相似样本引导RL稳定训练，缓解分布偏移"
          ],
          "noveltyVerdict": "在VLA训练策略上创新，有效提升鲁棒性。",
          "duplicateRisk": "low",
          "dedupeNote": "将意图解耦与RL稳定化结合，区别于纯模仿学习。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Scaling by Diversified Experience for Vision-Language-Action Models"
          ]
        },
        {
          "id": "2606.09416v1",
          "title": "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer",
          "summary": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named.",
          "summaryRaw": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named. Recent language-agent work names this layer the harness, the external system that mediates tools, manages state, bounds resources, and records execution. The robotics community has not yet adopted this framing, and we propose that robot middleware is that harness. A Physical AI harness differs from a software harness in where it intervenes. A software harness mediates at tool-call boundaries. A Physical AI harness must mediate at control, computing, and communication simultaneously, because a learned policy's output crosses all three: its commands shift the trajectory, its inference time shifts the schedule, and its payload shifts the bandwidth. Robot middleware is the lowest robot-stack layer with mediating abstractions over all three, so it is best positioned to compose their enforcement. It already provides most of what a harness needs but lacks the enforcement for an AI model. We name this missing enforcement as three functions: Projection gates each output at emission, Isolation bounds the model's execution and transmission slot, and Transfer falls back to a verified baseline when checks fail. Each appears today as hand-built application code in deployed robot systems, built on surfaces robot middleware already provides. Robot middleware should host them not as the best single-axis enforcer but as the layer that composes all three. We sketch this as a ROS 2 Harness Profile, a deployment artifact that carries an AI model's declared output region, inference budget, and operating regime while the middleware enforces them across ROS 2, DDS, and Zenoh.",
          "link": "https://arxiv.org/abs/2606.09416v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09416v1",
          "published": "2026-06-08T12:29:54Z",
          "updated": "2026-06-08T12:29:54Z",
          "authors": [
            "Sanghoon Lee",
            "Jiyeong Chae",
            "Kyung-Joon Park"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 85,
          "importanceLevel": "A",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 80,
            "novelty": 75,
            "impact": 80,
            "practicality": 90,
            "coreAlignment": 70
          },
          "oneSentenceSummary": "机器人中间件作为物理AI的线束层，整合VLA策略与系统资源管理。",
          "summaryCn": "提出机器人中间件是物理AI的线束层，不同于软件线束在工具调用边界介入，物理AI线束需同时媒介控制、计算与通信。为VLA模型提供确定性时序与资源管理。",
          "whyImportant": "明确物理AI部署的工程框架，促进VLA模型可靠集成。",
          "reasonTags": [
            "中间件",
            "物理AI",
            "线束工程"
          ],
          "innovationPoints": [
            "提出物理AI线束概念，区分于软件线束",
            "强调同步控制、计算与通信的需求"
          ],
          "noveltyVerdict": "命名并框架化机器人在物理AI时代的新角色。",
          "duplicateRisk": "medium",
          "dedupeNote": "非VLA模型创新，而是系统集成框架。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer"
          ]
        },
        {
          "id": "2606.09337v1",
          "title": "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation",
          "summary": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies.",
          "summaryRaw": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies. When contact conditions shift from the training distribution, the policy cannot perform online adaptation, leading to problems such as inappropriate contact forces and inefficient retries. Therefore, we propose TORL-VLA, a tactile-guided online reinforcement learning framework that couples tactile feedback with policy refinement for contact-rich manipulation. Our method introduces a tactile-derived wrench-aware VLA to predict reference actions and future wrench sequences, while a lightweight online RL module is used to refine the reference actions. To stabilize learning from mixed exploratory policy-generated and human-intervention data, we introduce an intervention-censored critic that prevents post-intervention success from being wrongly credited to policy-generated actions preceding intervention. Real-robot experiments on long-horizon contact-rich tasks, including latch manipulation, coffee-cup placement, and egg handling, show that TORL-VLA improves success rates at both subtask and full-task levels, as well as time-bounded execution efficiency over strong baselines.",
          "link": "https://arxiv.org/abs/2606.09337v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09337v1",
          "published": "2026-06-08T11:05:05Z",
          "updated": "2026-06-08T11:05:05Z",
          "authors": [
            "Huaihang Zheng",
            "Yi Yang",
            "Kai Ma",
            "Shenglin Xu",
            "Tian Xie",
            "Guozheng Li",
            "Xiangyu Wang",
            "Yiren Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 85,
          "importanceLevel": "A",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 88,
            "novelty": 80,
            "impact": 75,
            "practicality": 78,
            "coreAlignment": 86
          },
          "oneSentenceSummary": "触觉引导在线强化学习用于接触丰富操作的VLA。",
          "summaryCn": "提出TORL-VLA，结合触觉衍生力觉感知VLA预测参考动作和未来力序列，并用轻量在线RL模块优化参考动作。通过混合探索策略和在线学习稳定训练。",
          "whyImportant": "引入触觉反馈在线RL，提升VLA在接触任务中的适应能力。",
          "reasonTags": [
            "触觉反馈",
            "在线RL",
            "接触丰富操作"
          ],
          "innovationPoints": [
            "触觉-力觉感知VLA预测动作和力序列",
            "在线RL模块在部署时微调策略"
          ],
          "noveltyVerdict": "将触觉与在线RL融入VLA，增强接触任务鲁棒性。",
          "duplicateRisk": "medium",
          "dedupeNote": "区别于离线VLA，专注在线RL细调，触觉信息驱动。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation"
          ]
        },
        {
          "id": "2606.08962v1",
          "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
          "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive.",
          "summaryRaw": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process. Existing acceleration methods reduce this cost by caching and reusing computation within a single chunk's denoising trajectory. Our empirical analysis reveals a substantial source of redundancy they overlook: redundancy across chunks. When a robot executes a smooth behavior, the residuals computed at a given denoising step are strongly correlated from one chunk to the next. We introduce C$^3$ache, a training-free method that caches and reuses these residuals across inference chunks at the same denoising step. Experiments on benchmarks with a Fast-WAM backbone show that C$^3$ache achieves up to a $2.5\\times$ speedup in total wall-clock inference time, with negligible degradation in task success rate.",
          "link": "https://arxiv.org/abs/2606.08962v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
          "published": "2026-06-08T03:01:10Z",
          "updated": "2026-06-08T03:01:10Z",
          "authors": [
            "Weisen Zhao",
            "Lam Nguyen",
            "Zhicong Lu",
            "Yuzhang Shang"
          ],
          "categories": [
            "cs.CV",
            "cs.LG",
            "cs.RO"
          ],
          "score": 82,
          "importanceLevel": "A",
          "lane": "Both",
          "dimensionScores": {
            "relevance": 85,
            "novelty": 85,
            "impact": 78,
            "practicality": 88,
            "coreAlignment": 86
          },
          "oneSentenceSummary": "跨推理块缓存加速世界动作模型推理。",
          "summaryCn": "提出C3ache，利用世界动作模型多推理块之间的残差相关性，缓存并复用跨块残差，无需训练即可加速推理，弥补现有方法只重用单块内去噪计算的不足。",
          "whyImportant": "首次利用跨块冗余加速WAM，提高实时性。",
          "reasonTags": [
            "推理加速",
            "世界动作模型",
            "跨块缓存"
          ],
          "innovationPoints": [
            "发现并利用跨块残差相关性实现缓存",
            "训练-free方法，即插即用"
          ],
          "noveltyVerdict": "新颖的跨块缓存策略，显著降低WAM延迟。",
          "duplicateRisk": "low",
          "dedupeNote": "不同于单块内缓存加速，开创跨块冗余利用。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core",
            "wam_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache"
          ]
        },
        {
          "id": "2606.09630v1",
          "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
          "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer t…",
          "summaryRaw": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses it as a semantic reward selector: it predicts a recovery descriptor and reward mask for in-simulation residual-policy training, followed by zero-shot sim-to-real deployment of the trained recovery policies. This decouples high-level failure understanding from low-level corrective control to support different VLAs. Experiments across short-horizon, long-horizon, and contact-rich manipulation tasks show that ReCoVLA outperforms the tested baselines on average. In simulation, our reward compiler improves average success from 36.7% for the fine-tuned $π_{0.5}$ baseline to 66.7%. In physical zero-shot sim-to-real experiments, ReCoVLA achieves the best average performance, with 61.7% success.",
          "link": "https://arxiv.org/abs/2606.09630v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
          "published": "2026-06-08T15:29:09Z",
          "updated": "2026-06-08T15:29:09Z",
          "authors": [
            "Haodi Hu",
            "Chung-Ta Huang",
            "Jing Liu",
            "Ye Wang",
            "Kei Suzuki",
            "Matthew Brand",
            "Toshiaki Koike-Akino"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "score": 82,
          "importanceLevel": "A",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 85,
            "novelty": 82,
            "impact": 80,
            "practicality": 75,
            "coreAlignment": 86
          },
          "oneSentenceSummary": "VLM引导奖励编译实现VLA策略的失败恢复。",
          "summaryCn": "提出ReCoVLA，冻结预训练VLA，用外部VLM推断失败模式，编译任务相关奖励用于残差策略训练，零样本仿真到真实迁移。解耦高层失败理解与低层校正控制。",
          "whyImportant": "用VLM编译奖励，实现通用失败恢复，不修改VLA模型。",
          "reasonTags": [
            "失败恢复",
            "VLM",
            "奖励编译"
          ],
          "innovationPoints": [
            "VLM作为语义奖励选择器指导残差策略训练",
            "仿真到真实零样本迁移恢复策略"
          ],
          "noveltyVerdict": "利用VLM的语义理解规划恢复，无需修改原VLA。",
          "duplicateRisk": "medium",
          "dedupeNote": "不同于内嵌恢复模块，采用外部VLM生成恢复奖励。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies"
          ]
        },
        {
          "id": "2606.09615v1",
          "title": "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience",
          "summary": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance.",
          "summaryRaw": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance. To move beyond the limitations of demonstration data, in this work, we propose DexPIE, a post-training framework for dexterous policy improvement from experience collected through real-world deployment. First, DexPIE enables effective exploration coverage through a dexterous-hand-adapted intervention system and multi-stage DAgger-style data collection across initial and intermediate task stages, providing reliable supervision for accurate policy evaluation. To reduce temporal noise between post-training rollouts and demonstration data, we introduce asynchronous inference in the relative action space, which better aligns rollout data with demonstrated behavior and allows the critic to learn a value function induced by a more consistent underlying policy. Finally, DexPIE improves the policy through conditioning on a continuous optimality indicator, allowing the policy to leverage the quality of data in a more fine-grained manner. Across three challenging real-world dexterous manipulation tasks, DexPIE achieves a 37% improvement in success rate over the demonstration-based reference policy, outperforming all baseline methods and demonstrating stronger robustness. The source code and dataset will be made publicly available.",
          "link": "https://arxiv.org/abs/2606.09615v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09615v1",
          "published": "2026-06-08T15:21:45Z",
          "updated": "2026-06-08T15:21:45Z",
          "authors": [
            "Ruizhe Liao",
            "Wenrui Chen",
            "Liangji Zeng",
            "Haoran Lin",
            "Fan Yang",
            "Kailun Yang",
            "Yaonan Wang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 80,
          "importanceLevel": "A",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 75,
            "novelty": 78,
            "impact": 85,
            "practicality": 80,
            "coreAlignment": 65
          },
          "oneSentenceSummary": "通过真实世界经验稳定提升灵巧操作策略。",
          "summaryCn": "提出DexPIE，利用手部适配干预系统多阶段DAgger数据收集，以及异步推理精炼器，从真实世界部署中收集经验提升灵巧操作策略，缓解演示数据偏差。",
          "whyImportant": "实现少样本灵巧操作策略的在线提升，降低人工采集需求。",
          "reasonTags": [
            "灵巧操作",
            "策略提升",
            "真实世界经验"
          ],
          "innovationPoints": [
            "多阶段DAgger避免协同误差",
            "异步推理处理延迟噪声"
          ],
          "noveltyVerdict": "有效利用少量部署数据提升灵巧操作。",
          "duplicateRisk": "medium",
          "dedupeNote": "专注于灵巧手，与VLA的失败恢复不同。",
          "retrievalGroups": [
            "category",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience"
          ]
        },
        {
          "id": "2606.09258v1",
          "title": "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection",
          "summary": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences.",
          "summaryRaw": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences. We propose Back to the Familiar Future (B2FF), a recovery framework for foresight-driven VLAs that leverages future visual conditioning as a recovery interface. Before execution, the VLA generates a milestone bank of familiar future states conditioned on the clean initial observation. At recovery time, a recoverability-aware selector selects a recovery milestone from this bank and enforces it as a fixed visual goal. This enables the VLA to robustly map off-trajectory observations back to a familiar future. On failure-injected LIBERO, under controlled recovery timing aligned with the injected failure, B2FF increases the average success rate of a baseline VLA from 56.3% to 74.0%, demonstrating that pre-imagined milestones can guide recovery without fine-tuning the low-level action generator.",
          "link": "https://arxiv.org/abs/2606.09258v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09258v1",
          "published": "2026-06-08T09:30:38Z",
          "updated": "2026-06-08T09:30:38Z",
          "authors": [
            "Suyeon Shin",
            "Juwon Kim",
            "Hyeonbin Park",
            "Hyunseo Kim",
            "Hyundo Lee",
            "Hyung-Sin Kim",
            "Byoung-Tak Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 80,
          "importanceLevel": "A",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 83,
            "novelty": 78,
            "impact": 72,
            "practicality": 75,
            "coreAlignment": 84
          },
          "oneSentenceSummary": "通过预想象里程碑选择实现VLA策略失败恢复。",
          "summaryCn": "提出B2FF，在干净初始观察条件生成熟悉未来状态里程碑库，恢复时用可恢复性感知选择器选取里程碑作为固定视觉目标，将脱轨观测映射回熟悉未来。",
          "whyImportant": "利用未来视觉条件化实现VLA策略的可靠失败恢复。",
          "reasonTags": [
            "失败恢复",
            "视觉里程碑",
            "VLA"
          ],
          "innovationPoints": [
            "预想象熟悉未来状态作为恢复界面",
            "可恢复性选择器确保有效里程碑"
          ],
          "noveltyVerdict": "创新地使用预生成视觉目标引导故障恢复。",
          "duplicateRisk": "medium",
          "dedupeNote": "与ReCoVLA不同，B2FF依赖VLA自身的未来视觉想象。",
          "retrievalGroups": [
            "category",
            "robotics",
            "vla_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection"
          ]
        },
        {
          "id": "2606.08992v1",
          "title": "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning",
          "summary": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on…",
          "summaryRaw": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on local visual cues and linear history-based reasoning, overlooking the spatial nature of navigation across explored regions, traversed paths, landmarks, and their spatial relations. In this paper, we propose SpaceVLN, a navigation agent built around Spatial Cognitive Memory and Task-Guided Spatial Reasoning. Specifically, SpaceVLN introduces an efficient stagewise closed-loop framework where planning and execution are organized around verifiable space--landmark stages. During navigation, the agent progressively abstracts explored regions into Spatial Waypoints and dynamically maintains subtask-grounded landmark evidence, forming a hierarchical Spatial Cognitive Memory for progress localization and spatial-relation understanding. Built on this memory, Spatial-CoT integrates task-progress reasoning with spatial perception, analysis, and prediction, enabling Task-Guided Spatial Reasoning for embodied navigation. The unified stage interface enables SpaceVLN to address both Vision-and-Language Navigation and Object-Goal Navigation under a unified zero-shot setting, without task-specific policy training. Across R2R-CE, RxR-CE, GN-Bench, and HM3D-OVON, SpaceVLN achieves state-of-the-art zero-shot performance, and real-robot deployment further validates its applicability. These results highlight Spatial Cognitive Memory and Task-Guided Spatial Reasoning as a practical foundation for stronger embodied navigation agents.",
          "link": "https://arxiv.org/abs/2606.08992v1",
          "pdfLink": "https://arxiv.org/pdf/2606.08992v1",
          "published": "2026-06-08T03:42:08Z",
          "updated": "2026-06-08T03:42:08Z",
          "authors": [
            "Yucheng Deng",
            "Pingrui Lai",
            "Xinhai Li",
            "Chenjia Bai",
            "Xiaoheng Deng",
            "Chengnuo Sun",
            "Xuelong Li",
            "Hua Yang"
          ],
          "categories": [
            "cs.AI",
            "cs.CV",
            "cs.RO"
          ],
          "score": 78,
          "importanceLevel": "A",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 75,
            "novelty": 80,
            "impact": 82,
            "practicality": 80,
            "coreAlignment": 70
          },
          "oneSentenceSummary": "零样本视觉-语言导航代理，具有在线空间认知记忆与推理。",
          "summaryCn": "提出SpaceVLN，围绕空间认知记忆和任务引导空间推理，采用阶段式闭环框架，将规划与执行组织到可验证的空间地标阶段。渐进构建空间路点图，实现高效零样本导航。",
          "whyImportant": "在连续环境中实现零样本语言导航，提升空间推理能力。",
          "reasonTags": [
            "视觉语言导航",
            "空间推理",
            "零样本"
          ],
          "innovationPoints": [
            "空间认知记忆抽象探索区域为路点",
            "任务引导的空间推理规划",
            "阶段式闭环框架验证规划"
          ],
          "noveltyVerdict": "将空间记忆与推理融入VLN，提升复杂环境导航。",
          "duplicateRisk": "low",
          "dedupeNote": "专注导航的空间认知模型，不同于操作VLA。",
          "retrievalGroups": [
            "category",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning"
          ]
        },
        {
          "id": "2606.09457v1",
          "title": "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models",
          "summary": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting.",
          "summaryRaw": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting. We introduce $ω$-EVA, a latent interactive world model that realizes an Envision--Verify--Act loop for embodied action generation. Its three-stage framework learns action-conditioned latent dynamics, trains a language-conditioned flow policy on dynamics-aware visual representations, and feeds the policy's proposal back through the world model. A tri-branch refiner jointly reasons over the current state, proposal-conditioned future, and proposed action to produce the final action chunk. Because consequence reasoning remains in latent feature space, $ω$-EVA avoids generating future videos at inference. Evaluations across diverse single-arm, bimanual, long-horizon, and perturbed simulation settings show that the complete interaction pipeline consistently improves the proposal policy, while latent diagnostics indicate meaningful action-conditioned future structure. With approximately 1.2B parameters and no additional robot-data pretraining, $ω$-EVA demonstrates a compact and competitive performance--scale--data trade-off, making the world model an active action-feedback module rather than a passive predictor.",
          "link": "https://arxiv.org/abs/2606.09457v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09457v1",
          "published": "2026-06-08T13:12:56Z",
          "updated": "2026-06-08T13:12:56Z",
          "authors": [
            "Zhenguo Sun",
            "Yu Sun",
            "Hande Huang",
            "Alois Knoll"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 78,
          "importanceLevel": "A",
          "lane": "WAM",
          "dimensionScores": {
            "relevance": 82,
            "novelty": 80,
            "impact": 72,
            "practicality": 70,
            "coreAlignment": 80
          },
          "oneSentenceSummary": "潜在交互世界模型实现设想-验证-行动循环。",
          "summaryCn": "提出ω-EVA，学习动作条件潜在动态，训练语言条件流策略，将策略提案反馈通过世界模型，由三分支精炼器联合推理当前状态、提案未来和动作，产生最终动作块。",
          "whyImportant": "实现内在设想验证，提升动作生成的可靠性和一致性。",
          "reasonTags": [
            "交互世界模型",
            "设想-验证-行动",
            "潜在动态"
          ],
          "innovationPoints": [
            "设想-验证-行动闭环避免生成未来视频",
            "潜在空间一致性推理"
          ],
          "noveltyVerdict": "将世界模型用于内部动作验证，提升决策质量。",
          "duplicateRisk": "medium",
          "dedupeNote": "区别于生成完整视频的WAM，在潜在空间验证。",
          "retrievalGroups": [
            "category",
            "robotics",
            "wam_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models"
          ]
        },
        {
          "id": "2606.09243v1",
          "title": "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video",
          "summary": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions.",
          "summaryRaw": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions. Therefore, we introduce EgoTactile, a benchmark pairing egocentric video with full-hand pressure supervision for diverse everyday objects, incorporating a bare-hand transfer subset to enable generalization to natural scenarios. Leveraging this benchmark, we first establish EgoPressureFormer as a discriminative baseline. Beyond this, to explicitly address the uncertainty in partial observations, we propose EgoPressureDiff, a conditional diffusion framework that adapts a large-scale pre-trained video diffusion backbone. By combining rich world knowledge priors with a Physically-Informed Feature Rectification layer to inject semantic constraints, our approach effectively infers plausible contact patterns and resolves visual-physical ambiguities. Extensive experiments demonstrate that our method achieves superior performance on the benchmark and robust transferability to in-the-wild scenarios. Our project page is available at https://egotactile.github.io/.",
          "link": "https://arxiv.org/abs/2606.09243v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09243v1",
          "published": "2026-06-08T09:20:03Z",
          "updated": "2026-06-08T09:20:03Z",
          "authors": [
            "Yuan Zeng",
            "Yujia Shi",
            "Tiao Tan",
            "Xingting Li",
            "Yaqi Qin",
            "Zongqing Lu",
            "Wenming Yang",
            "Jing-Hao Xue"
          ],
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "score": 72,
          "importanceLevel": "B",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 72,
            "novelty": 80,
            "impact": 70,
            "practicality": 75,
            "coreAlignment": 60
          },
          "oneSentenceSummary": "从自我中心视频学习日常物体抓取压力。",
          "summaryCn": "提出EgoTactile基准，配对自我中心视频与全手压力监督。建立EgoPressureFormer基线，并提出EgoPressureDiff扩散框架与物理碰撞先验，实现稠密压力估计。",
          "whyImportant": "无需专用硬件，从普通视频预测抓取压力，助力远程操作。",
          "reasonTags": [
            "抓取压力",
            "视觉触觉",
            "扩散模型"
          ],
          "innovationPoints": [
            "大规模视频-压力配对基准",
            "视频扩散模型结合物理先验"
          ],
          "noveltyVerdict": "首次实现日常物体全手压力预测，非VLA核心。",
          "duplicateRisk": "low",
          "dedupeNote": "非VLA/WAM核心，但触觉感知对操作有增量价值。",
          "retrievalGroups": [
            "category",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video"
          ]
        },
        {
          "id": "2606.09640v1",
          "title": "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics",
          "summary": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a…",
          "summaryRaw": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a single additive residual, but do not preserve the internal mechanical structure of Euler--Lagrange systems. This leads to models that do not preserve symmetry, positive-definiteness, or the coupling between inertia and velocity-dependent terms, which can result in physically inconsistent predictions and reduced reliability when embedded in model-based controllers. We propose a structure-preserving residual learning framework that decomposes model mismatch into an inertia correction, the corresponding induced Coriolis term, and a generalized-force residual. The mechanical component is learned under physical constraints, while the disturbance-sensitive component is represented through a sparse history-dependent latent interaction model and adapted online using Bayesian linear regression. This separation preserves key mechanical structure while restricting adaptation to the part of the dynamics most affected by changing conditions. Experiments across multiple robotic platforms, including mobile, aerial, and manipulator systems, show that the proposed method improves dynamics prediction and trajectory tracking under coupled and time-varying dynamics. These results highlight the value of combining structured residual modeling, compact latent interaction selection, and selective online adaptation for real-world model-based control.",
          "link": "https://arxiv.org/abs/2606.09640v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09640v1",
          "published": "2026-06-08T15:36:00Z",
          "updated": "2026-06-08T15:36:00Z",
          "authors": [
            "Rishabh Dev Yadav",
            "Samaksh Ujjawal",
            "Sihao Sun",
            "Spandan Roy",
            "Wei Pan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 70,
          "importanceLevel": "B",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 70,
            "novelty": 72,
            "impact": 75,
            "practicality": 70,
            "coreAlignment": 65
          },
          "oneSentenceSummary": "结构保持残差学习与在线自适应机器人动力学。",
          "summaryCn": "提出物理感知稀疏学习框架，将模型失配分解为惯性校正和诱导科里奥利项，保持正定性。结合稀疏诱导正则和选择性在线自适应，实现高效长期预测。",
          "whyImportant": "提升机械臂动力学模型精度，支撑模型基控制与规划。",
          "reasonTags": [
            "动力学建模",
            "物理感知",
            "残差学习"
          ],
          "innovationPoints": [
            "结构保持分解保持物理一致性",
            "稀疏学习与在线自适应"
          ],
          "noveltyVerdict": "改进动力学残差学习，保持欧拉-拉格朗日结构。",
          "duplicateRisk": "medium",
          "dedupeNote": "聚焦经典控制理论，不同于学习世界模型。",
          "retrievalGroups": [
            "category",
            "robotics",
            "wam_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics"
          ]
        },
        {
          "id": "2606.09507v1",
          "title": "Prisma-World: Camera-Controllable Multi-Agent Video World Model",
          "summary": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of…",
          "summaryRaw": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of the same scene, leading to inconsistent objects, layouts, and appearances across agents. Conventional camera conditioning controls individual trajectories, but it does not explicitly couple the generation of views that should agree under shared scene geometry. We introduce Prisma-World, a camera-controllable multi-agent world model that formulates multi-agent generation as a joint geometry-aware denoising process for cross-view consistency. Prisma-World processes all agent videos within one full-attention sequence, uses a multi-agent RoPE design to distinguish agent identities while preserving synchronized temporal coordinates, and injects relative camera geometry into attention to bias overlapping viewpoints toward shared scene evidence. To further strengthen multi-view consistency and enhance global spatial perception, we augment our framework with an overlap-decaying curriculum training paradigm alongside minimap-conditioned structural guidance. To facilitate the training and evaluation of multi-agent models, we introduce PrismaDataset, a large-scale UE5 dataset with panoramic acquisition across diverse scenes, composable multi-agent view groups with flexible agent counts and complex camera trajectories, and precise camera/action annotations for consistency training and evaluation. Experiments show that a single Prisma-World model can generate high-fidelity multi-agent videos with flexible agent numbers, camera controllability, improved cross-view consistency, and spatial grounding under minimap guidance.",
          "link": "https://arxiv.org/abs/2606.09507v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09507v1",
          "published": "2026-06-08T13:59:50Z",
          "updated": "2026-06-08T13:59:50Z",
          "authors": [
            "Huiqiang Sun",
            "Zhan Peng",
            "Size Wu",
            "Kun Wang",
            "Kang Liao",
            "Dianyi Wang",
            "Xingyu Zeng",
            "Sheng Jin"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 70,
          "importanceLevel": "B",
          "lane": "WAM",
          "dimensionScores": {
            "relevance": 70,
            "novelty": 85,
            "impact": 65,
            "practicality": 60,
            "coreAlignment": 70
          },
          "oneSentenceSummary": "相机可控多智能体视频世界模型，保证跨视图一致性。",
          "summaryCn": "提出Prisma-World，通过联合几何感知去噪过程生成多智能体视频，使用多智能体RoPE区分视角，保证重叠区域场景对象一致，支持可控相机运动的多智能体视觉模拟。",
          "whyImportant": "实现多智能体3D一致世界模拟，可用于协同场景生成。",
          "reasonTags": [
            "多智能体",
            "视频世界模型",
            "跨视图一致"
          ],
          "innovationPoints": [
            "联合去噪保证几何一致性",
            "多智能体RoPE视角编码",
            "相机可控"
          ],
          "noveltyVerdict": "首次将几何一致性引入多智能体视频生成世界模型。",
          "duplicateRisk": "low",
          "dedupeNote": "专注多智能体一致性，区别于单视图世界模型。",
          "retrievalGroups": [
            "category",
            "wam_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Prisma-World: Camera-Controllable Multi-Agent Video World Model"
          ]
        },
        {
          "id": "2606.09286v1",
          "title": "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands",
          "summary": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap.",
          "summaryRaw": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap. They rely heavily on dense reference trajectories and perfect state observability, which inherently limits physical generalization. We present Vision Guided Agile Interaction Control (VAIC), a unified framework that bridges this gap by operating exclusively on onboard depth, historical proprioception, and a decoupled user command interface. VAIC employs a two-stage distillation paradigm. First, a privileged teacher policy masters diverse interaction skills using precise object kinematics and exact environmental states. Second, a deployable student policy distills these capabilities by replacing full body tracking with velocity targets across multiple axes and an interaction indicator for each frame. The student utilizes a recurrent object adaptation module to implicitly infer unobservable object dynamics from raw depth streams and proprioception. Evaluations and real-world deployments on the humanoid robot demonstrate that a single VAIC policy successfully executes highly diverse dynamic tasks. These tasks include box carrying, cart interaction, and skateboarding, consistently outperforming baselines and advancing autonomous humanoid deployment.",
          "link": "https://arxiv.org/abs/2606.09286v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09286v1",
          "published": "2026-06-08T09:52:55Z",
          "updated": "2026-06-08T09:52:55Z",
          "authors": [
            "Dongting Li",
            "Qianyang Wu",
            "Xingyu Chen",
            "Liang Li",
            "Yuhang Lin",
            "Sikai Wu",
            "Guoyao Zhang",
            "Mingliang Zhou"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 69,
          "importanceLevel": "B",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 65,
            "novelty": 78,
            "impact": 70,
            "practicality": 70,
            "coreAlignment": 55
          },
          "oneSentenceSummary": "解耦命令的视觉引导人形灵动物体交互控制。",
          "summaryCn": "提出VAIC，用两阶段蒸馏范式从特权老师策略蒸馏到仅需深度、历史本体感和解耦命令的学生策略。实现人形机器人敏捷交互。",
          "whyImportant": "仅依赖机载传感器实现人形灵活交互，减少真机部署差距。",
          "reasonTags": [
            "人形控制",
            "视觉引导",
            "蒸馏"
          ],
          "innovationPoints": [
            "两步蒸馏从全状态到部分可观测",
            "速度目标取代全身跟踪"
          ],
          "noveltyVerdict": "有效缩小仿真到真实差距的人形控制框架。",
          "duplicateRisk": "low",
          "dedupeNote": "聚焦人形交互控制，非VLA。",
          "retrievalGroups": [
            "category",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands"
          ]
        },
        {
          "id": "2606.09559v1",
          "title": "Safe-RULE: Safe Reinforcement UnLEarning",
          "summary": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induc…",
          "summaryRaw": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induce unsafe policy behavior. In this work, we propose a new learning paradigm, named safe reinforcement unlearning (Safe-RULE), used as a defense framework to remove the influence of poisoned data without retraining from scratch or requiring access to the original training environment. We further extend reinforcement unlearning to offline Safe RL by explicitly accounting for both task performance and safety constraints during the unlearning process. Experiments across benchmark Safe RL tasks demonstrate that our approach effectively enhances safety performance against data poisoning attacks.",
          "link": "https://arxiv.org/abs/2606.09559v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09559v1",
          "published": "2026-06-08T14:33:40Z",
          "updated": "2026-06-08T14:33:40Z",
          "authors": [
            "Shixiong Jiang",
            "Taozheng Zhu",
            "Fanxin Kong"
          ],
          "categories": [
            "cs.AI",
            "cs.LG",
            "cs.RO"
          ],
          "score": 68,
          "importanceLevel": "B",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 65,
            "novelty": 75,
            "impact": 70,
            "practicality": 70,
            "coreAlignment": 55
          },
          "oneSentenceSummary": "安全强化遗忘学习，防御离线安全RL数据投毒。",
          "summaryCn": "提出Safe-RULE，移除毒化数据影响无需从头训练，在离线安全RL中同时考虑任务表现和安全约束进行遗忘学习。提升安全性能。",
          "whyImportant": "强化学习安全性，抵御数据攻击，提升策略安全。",
          "reasonTags": [
            "安全RL",
            "遗忘学习",
            "数据投毒"
          ],
          "innovationPoints": [
            "安全强化遗忘范式",
            "无需环境交互的防御"
          ],
          "noveltyVerdict": "引入遗忘学习至安全RL，新颖防御范式。",
          "duplicateRisk": "low",
          "dedupeNote": "聚焦安全防御，非VLA/WAM核心。",
          "retrievalGroups": [
            "category",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Safe-RULE: Safe Reinforcement UnLEarning"
          ]
        },
        {
          "id": "2606.09569v1",
          "title": "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications",
          "summary": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness.",
          "summaryRaw": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness. Existing methods, however, often involve high computational costs and rely heavily on abundant feature matches, limiting their applicability in time-sensitive driving scenarios. To address these limitations, this paper introduces a unified framework for efficient relative pose estimation, built upon a novel translation parameterization and first-order rotation approximation. Within this framework, we propose three efficient minimal solvers specifically designed for autonomous vehicles. The first solver integrates the vertical direction prior from Inertial Measurement Units (IMUs), the second utilizes the rotation axis direction prior during steering maneuvers, and the third is designed for planar motion - a realistic assumption for ground vehicles operating on structured roads. By reducing both the minimal number of point correspondences and the algebraic complexity, our methods enable faster hypothesis generation within RANSAC-based pipelines, improving suitability for real-time systems. Extensive experiments on synthetic datasets and the KITTI autonomous driving benchmark demonstrate that the proposed solvers achieve a favorable balance between speed and accuracy compared to existing state-of-the-art algorithms.",
          "link": "https://arxiv.org/abs/2606.09569v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09569v1",
          "published": "2026-06-08T14:43:53Z",
          "updated": "2026-06-08T14:43:53Z",
          "authors": [
            "Tao Li",
            "Liang Liu",
            "Jianli Han",
            "Weimin Lv"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 74,
          "importanceLevel": "A",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 39,
            "novelty": 22,
            "impact": 14,
            "practicality": 8,
            "coreAlignment": 25
          },
          "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
          "summaryCn": "论文核心内容是：With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and…",
          "whyImportant": "命中机器人、自动驾驶、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
          "reasonTags": [
            "机器人",
            "自动驾驶",
            "新基准",
            "通用框架"
          ],
          "innovationPoints": [
            "包含新基准或新数据评测"
          ],
          "noveltyVerdict": "创新信号强，像是带新范式或新基准的工作。",
          "duplicateRisk": "low",
          "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
          "retrievalGroups": [
            "category",
            "driving",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications"
          ]
        },
        {
          "id": "2606.09499v1",
          "title": "Targeting World Models to Compromise Robot Learning Pipelines",
          "summary": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models i…",
          "summaryRaw": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models introduce a uniquely stealthy and effective data poisoning entry point into the robot learning supply chain that can result in the deployment of unsafe or otherwise compromised robotic policies despite training on seemingly safe ground truth training data. In contrast to traditional data poisoning techniques which directly implant dangerous trajectories into sold or uploaded datasets, our novel attack methods inject malicious prompts or compromising transition dynamics into visibly safe teleoperated datasets which are only activated once fed through a world model as input. This can result in the generation of synthetic, dangerous robot training trajectories and subsequently unsafe or compromised robot policies. We demonstrate the effectiveness of our attacks against both state of the art action conditioned and text conditioned world models, showing a full end-to-end backdoor on a downstream DRL policy and a proof-of-concept for the VLA setting. Overall these findings necessitate research into more secure world models and reevaluating their position within the robot learning supply chain.",
          "link": "https://arxiv.org/abs/2606.09499v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09499v1",
          "published": "2026-06-08T13:50:31Z",
          "updated": "2026-06-08T13:50:31Z",
          "authors": [
            "Ethan Rathbun",
            "Ahmed Agha",
            "Saaduddin Mahmud",
            "Christopher Amato",
            "Alina Oprea",
            "Eugene Bagdasarian"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 72,
          "importanceLevel": "A",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 47,
            "novelty": 12,
            "impact": 9,
            "practicality": 13,
            "coreAlignment": 25
          },
          "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
          "summaryCn": "论文核心内容是：World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating…",
          "whyImportant": "命中VLA、WAM、机器人、新基准主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
          "reasonTags": [
            "VLA",
            "WAM",
            "机器人",
            "新基准"
          ],
          "innovationPoints": [
            "包含新基准或新数据评测"
          ],
          "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
          "duplicateRisk": "low",
          "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
          "retrievalGroups": [
            "category",
            "robotics",
            "wam_core"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Targeting World Models to Compromise Robot Learning Pipelines"
          ]
        },
        {
          "id": "2606.09218v1",
          "title": "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM",
          "summary": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges t…",
          "summaryRaw": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges to traditional synchronous, frame-based algorithms. To address these challenges, this paper presents a novel framework for full degree of freedom (DoF) egomotion estimation directly from asynchronous optical flow, specifically targeting the joint recovery of angular and linear velocities. We decouple the differential epipolar constraint into distinct angular and linear velocity components, and derive its formulation for asynchronous data. Based on this formulation, an optimization algorithm is developed that enables full-DoF egomotion estimation leveraging at least five points. Furthermore, by applying a first-order approximation to rotational dynamics, we transform the constraint equations into a polynomial form, resulting in the first algebraic minimal 5-point solver for this formulation. To ensure real-time performance in high-speed scenarios, we additionally propose an accelerated solver achieved by truncating high-order angular velocity terms. Extensive evaluations on both synthetic and real-world datasets demonstrate that the asynchronous approach outperforms traditional synchronous methods, particularly in its accuracy and robustness to spatiotemporal noise. We believe that this work establishes a critical foundation for efficient and accurate continuous-time motion estimation in high-speed robotics applications.",
          "link": "https://arxiv.org/abs/2606.09218v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09218v1",
          "published": "2026-06-08T08:51:29Z",
          "updated": "2026-06-08T08:51:29Z",
          "authors": [
            "Shuo Pan",
            "Banglei Guan",
            "Bin Li",
            "Zhenbao Yu",
            "Zibin Liu",
            "Zi Wang",
            "Yang Shang",
            "Qifeng Yu"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 61,
          "importanceLevel": "A",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 30,
            "novelty": 17,
            "impact": 9,
            "practicality": 8,
            "coreAlignment": 11
          },
          "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
          "summaryCn": "论文核心内容是：As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal…",
          "whyImportant": "命中机器人、新基准、通用框架、真实实验主题，分类覆盖cs.CV，并体现较强的新颖性与影响潜力。",
          "reasonTags": [
            "机器人",
            "新基准",
            "通用框架",
            "真实实验"
          ],
          "innovationPoints": [
            "包含新基准或新数据评测",
            "提供真实场景实验验证"
          ],
          "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
          "duplicateRisk": "low",
          "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
          "retrievalGroups": [
            "category",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM"
          ]
        },
        {
          "id": "2606.09268v1",
          "title": "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation",
          "summary": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide d…",
          "summaryRaw": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide direct metric measurements. However, such multi-sensor configurations necessitate complex spatial-temporal calibration and increase deployment overhead. Although vision-only approaches offer a low-cost and scalable alternative, existing monocular visual systems typically struggle to simultaneously achieve efficient, globally consistent localization and dense, metric-consistent geometric perception. To bridge this gap, we propose \\textbf{VGP-Nav}, a unified framework for \\textit{Metric-Aware Visual Geometric Perception} that relies solely on monocular RGB input to jointly support metric localization and obstacle perception. Our key insight is to anchor localization-grounded visual geometry to physically meaningful scale constraints derived from ground-plane geometry, thereby providing a reliable metric reference for monocular perception. VGP-Nav resolves monocular scale ambiguity online and produces localization-grounded, metric obstacle representations that are directly applicable to downstream planning. Extensive experiments demonstrate strong generalization across diverse environments and successful deployment on real mobile robots, highlighting the practicality of our approach for scalable, low-cost, and safe autonomous navigation.",
          "link": "https://arxiv.org/abs/2606.09268v1",
          "pdfLink": "https://arxiv.org/pdf/2606.09268v1",
          "published": "2026-06-08T09:38:14Z",
          "updated": "2026-06-08T09:38:14Z",
          "authors": [
            "Hewei Pan",
            "Weiye Zhu",
            "Zekai Zhang",
            "Zitong Huang",
            "Rongtao Xu",
            "Jinbao Wang",
            "Feng Zheng"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 58,
          "importanceLevel": "A",
          "lane": "Robotics",
          "dimensionScores": {
            "relevance": 29,
            "novelty": 16,
            "impact": 6,
            "practicality": 13,
            "coreAlignment": 14
          },
          "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
          "summaryCn": "论文核心内容是：Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obst…",
          "whyImportant": "命中机器人、通用框架主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
          "reasonTags": [
            "机器人",
            "通用框架"
          ],
          "innovationPoints": [
            "提出具有跟踪价值的方法设计"
          ],
          "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
          "duplicateRisk": "low",
          "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
          "retrievalGroups": [
            "category",
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation"
          ]
        }
      ],
      "paperSets": {
        "overall": [
          {
            "id": "2606.09572v1",
            "title": "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control",
            "summary": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient tas…",
            "summaryRaw": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient task-conditioned visuomotor control. CT-VAM acts as a compact local execution policy that predicts action chunks from dualview visual observations, proprioception, and a lightweight task condition, potentially enabling a practical cloud-edge paradigm in which high-level semantic reasoning can be handled by large models while fast closed-loop control runs on local hardware. To fuse heterogeneous inputs effectively, CT-VAM introduces TARS (Thalamic Action Routing Stream), a stream-separated conditional attention decoder that independently routes action, visual and task streams, preventing dense sensory tokens from overwhelming compact task-relevant conditions. With only 68M parameters, CT-VAM achieves LIBERO success rates competitive with substantially larger VLA models, while reducing inference latency. Together with flow-consistent inpainting for asynchronous chunk execution, CT-VAM supports high-frequency control and demonstrates robust realworld deployment on resource-constrained robotic platforms.",
            "link": "https://arxiv.org/abs/2606.09572v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09572v1",
            "published": "2026-06-08T14:46:43Z",
            "updated": "2026-06-08T14:46:43Z",
            "authors": [
              "Jiacheng Li",
              "Yize Guo",
              "Jiabin Guo",
              "Qingchen Liu",
              "Jiahu Qin"
            ],
            "categories": [
              "cs.AI",
              "cs.RO"
            ],
            "score": 95,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 95,
              "novelty": 93,
              "impact": 88,
              "practicality": 90,
              "coreAlignment": 96
            },
            "oneSentenceSummary": "受小脑-丘脑启发的视觉动作模型，实现高效任务条件视觉运动控制。",
            "summaryCn": "提出CT-VAM，通过双视图视觉、本体感知和轻量级任务条件预测动作块。引入TARS流分离条件注意力解码器，独立路由动作、视觉和本体感知token。支持云端大模型高层推理与本地快速闭环控制协同。",
            "whyImportant": "实现高效视觉运动控制，分离高层推理与低频执行，推动云端-边缘架构。",
            "reasonTags": [
              "视觉动作模型",
              "端侧高效推理",
              "小脑-丘脑启发"
            ],
            "innovationPoints": [
              "小脑-丘脑启发式架构解耦任务意图与实时控制",
              "TARS流分离条件注意力，独立路由多模态输入",
              "轻量级本地策略支持高频闭环控制"
            ],
            "noveltyVerdict": "架构新颖，将生物启发引入VLA，分离推理与控制。",
            "duplicateRisk": "low",
            "dedupeNote": "首次从神经科学角度设计VLA解耦架构。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control"
            ]
          },
          {
            "id": "2606.09215v1",
            "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
            "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a h…",
            "summaryRaw": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces and reducing the legs to balance-preserving locomotion. We present MotionWAM, a real-time WAM that drives autonomous humanoid loco-manipulation from a single egocentric camera by conditioning the policy on the intermediate denoising features of a video world model. MotionWAM replaces the upper-lower split with a unified motion latent and predicts whole-body motion tokens that jointly cover locomotion, torso motion, height regulation, foot interaction, and hand manipulation in a single action space. A three-stage learning framework progressively adapts the video world model to egocentric visual dynamics and to the target humanoid embodiment. On nine real-world Unitree G1 tasks, MotionWAM runs in real time, substantially outperforms Vision-Language-Action (VLA) baselines fine-tuned on the same demonstrations by over 30% in overall success rate, and executes task-driven foot interaction that decoupled upper-lower policies cannot reach. Our results suggest that video-pretrained WAMs can be lifted from tabletop manipulation to coordinated, human-like whole-body humanoid control.",
            "link": "https://arxiv.org/abs/2606.09215v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
            "published": "2026-06-08T08:50:14Z",
            "updated": "2026-06-08T08:50:14Z",
            "authors": [
              "Jia Zheng",
              "Teli Ma",
              "Yudong Fan",
              "Zifan Wang",
              "Shuo Yang",
              "Junwei Liang"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 95,
            "importanceLevel": "S",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 92,
              "novelty": 90,
              "impact": 88,
              "practicality": 80,
              "coreAlignment": 94
            },
            "oneSentenceSummary": "实时世界动作模型驱动人形机器人全身移动操作。",
            "summaryCn": "提出MotionWAM，从单目相机实时驱动人形移动操作。用统一运动潜变量取代上下半身分割，预测全身运动token，并利用视频世界模型的中间去噪特征条件化策略，实现实时性。",
            "whyImportant": "首次实现实时世界动作模型用于人形机器人，提升全身协调。",
            "reasonTags": [
              "世界动作模型",
              "人形机器人",
              "实时控制"
            ],
            "innovationPoints": [
              "实时WAM通过统一运动潜变量实现全身协调",
              "条件化策略于去噪特征，避免高维扩散延迟",
              "端到端单目驱动移动操作"
            ],
            "noveltyVerdict": "突破WAM实时性瓶颈，针对高自由度人形机器人。",
            "duplicateRisk": "low",
            "dedupeNote": "专注人形全身移动操作，不同于桌面操作WAM。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation"
            ]
          },
          {
            "id": "2606.09009v1",
            "title": "Scaling by Diversified Experience for Vision-Language-Action Models",
            "summary": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences.",
            "summaryRaw": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences. We propose an Intention Decoupling algorithm to isolate control-relevant features from reasoning contexts and a similar-sample guided RL pipeline to stabilize policy updates and mitigate distribution shift. Extensive experiments on real-world robotic tasks and multi-modal benchmarks demonstrate that SyVLA achieves superior task success rates and stronger out-of-distribution generalization compared to existing methods, while effectively preserving core vision-language capabilities. Codes and Datasets is released on \\href{https://sy-vla.github.io/}{project page}.",
            "link": "https://arxiv.org/abs/2606.09009v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09009v1",
            "published": "2026-06-08T04:13:38Z",
            "updated": "2026-06-08T04:13:38Z",
            "authors": [
              "Leiyu Wang",
              "Zhaofengnian Wang",
              "Xueqi Li",
              "Luoyi Fan",
              "Cewu Lu",
              "Nanyang Ye"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 94,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 91,
              "impact": 85,
              "practicality": 82,
              "coreAlignment": 92
            },
            "oneSentenceSummary": "通过多样化经验训练鲁棒VLA模型，解耦意图与稳定策略优化。",
            "summaryCn": "提出SyVLA，利用多样化经验和意图解耦算法隔离控制相关特征，以及相似样本引导的RL管道稳定策略更新。在真实机器人任务和多模态基准上展示优越泛化能力。",
            "whyImportant": "解决VLA高层推理与低层控制纠缠，提升分布外泛化。",
            "reasonTags": [
              "多样化经验",
              "意图解耦",
              "鲁棒VLA"
            ],
            "innovationPoints": [
              "意图解耦算法隔离推理与控制特征",
              "相似样本引导RL稳定训练，缓解分布偏移"
            ],
            "noveltyVerdict": "在VLA训练策略上创新，有效提升鲁棒性。",
            "duplicateRisk": "low",
            "dedupeNote": "将意图解耦与RL稳定化结合，区别于纯模仿学习。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Scaling by Diversified Experience for Vision-Language-Action Models"
            ]
          },
          {
            "id": "2606.09416v1",
            "title": "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer",
            "summary": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named.",
            "summaryRaw": "Robot middleware faces a new role in the era of Physical AI. Learned policies, planners, and vision-language-action (VLA) models now enter deployed robots as causal participants on the control path, but the layer that integrates them with timing, scheduling, and network has not been named. Recent language-agent work names this layer the harness, the external system that mediates tools, manages state, bounds resources, and records execution. The robotics community has not yet adopted this framing, and we propose that robot middleware is that harness. A Physical AI harness differs from a software harness in where it intervenes. A software harness mediates at tool-call boundaries. A Physical AI harness must mediate at control, computing, and communication simultaneously, because a learned policy's output crosses all three: its commands shift the trajectory, its inference time shifts the schedule, and its payload shifts the bandwidth. Robot middleware is the lowest robot-stack layer with mediating abstractions over all three, so it is best positioned to compose their enforcement. It already provides most of what a harness needs but lacks the enforcement for an AI model. We name this missing enforcement as three functions: Projection gates each output at emission, Isolation bounds the model's execution and transmission slot, and Transfer falls back to a verified baseline when checks fail. Each appears today as hand-built application code in deployed robot systems, built on surfaces robot middleware already provides. Robot middleware should host them not as the best single-axis enforcer but as the layer that composes all three. We sketch this as a ROS 2 Harness Profile, a deployment artifact that carries an AI model's declared output region, inference budget, and operating regime while the middleware enforces them across ROS 2, DDS, and Zenoh.",
            "link": "https://arxiv.org/abs/2606.09416v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09416v1",
            "published": "2026-06-08T12:29:54Z",
            "updated": "2026-06-08T12:29:54Z",
            "authors": [
              "Sanghoon Lee",
              "Jiyeong Chae",
              "Kyung-Joon Park"
            ],
            "categories": [
              "cs.AI",
              "cs.RO"
            ],
            "score": 85,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 80,
              "novelty": 75,
              "impact": 80,
              "practicality": 90,
              "coreAlignment": 70
            },
            "oneSentenceSummary": "机器人中间件作为物理AI的线束层，整合VLA策略与系统资源管理。",
            "summaryCn": "提出机器人中间件是物理AI的线束层，不同于软件线束在工具调用边界介入，物理AI线束需同时媒介控制、计算与通信。为VLA模型提供确定性时序与资源管理。",
            "whyImportant": "明确物理AI部署的工程框架，促进VLA模型可靠集成。",
            "reasonTags": [
              "中间件",
              "物理AI",
              "线束工程"
            ],
            "innovationPoints": [
              "提出物理AI线束概念，区分于软件线束",
              "强调同步控制、计算与通信的需求"
            ],
            "noveltyVerdict": "命名并框架化机器人在物理AI时代的新角色。",
            "duplicateRisk": "medium",
            "dedupeNote": "非VLA模型创新，而是系统集成框架。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Harness Engineering for Physical AI: Robot Middleware Is the Harness Layer"
            ]
          },
          {
            "id": "2606.09337v1",
            "title": "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation",
            "summary": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies.",
            "summaryRaw": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies. When contact conditions shift from the training distribution, the policy cannot perform online adaptation, leading to problems such as inappropriate contact forces and inefficient retries. Therefore, we propose TORL-VLA, a tactile-guided online reinforcement learning framework that couples tactile feedback with policy refinement for contact-rich manipulation. Our method introduces a tactile-derived wrench-aware VLA to predict reference actions and future wrench sequences, while a lightweight online RL module is used to refine the reference actions. To stabilize learning from mixed exploratory policy-generated and human-intervention data, we introduce an intervention-censored critic that prevents post-intervention success from being wrongly credited to policy-generated actions preceding intervention. Real-robot experiments on long-horizon contact-rich tasks, including latch manipulation, coffee-cup placement, and egg handling, show that TORL-VLA improves success rates at both subtask and full-task levels, as well as time-bounded execution efficiency over strong baselines.",
            "link": "https://arxiv.org/abs/2606.09337v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09337v1",
            "published": "2026-06-08T11:05:05Z",
            "updated": "2026-06-08T11:05:05Z",
            "authors": [
              "Huaihang Zheng",
              "Yi Yang",
              "Kai Ma",
              "Shenglin Xu",
              "Tian Xie",
              "Guozheng Li",
              "Xiangyu Wang",
              "Yiren Ma"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 85,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 88,
              "novelty": 80,
              "impact": 75,
              "practicality": 78,
              "coreAlignment": 86
            },
            "oneSentenceSummary": "触觉引导在线强化学习用于接触丰富操作的VLA。",
            "summaryCn": "提出TORL-VLA，结合触觉衍生力觉感知VLA预测参考动作和未来力序列，并用轻量在线RL模块优化参考动作。通过混合探索策略和在线学习稳定训练。",
            "whyImportant": "引入触觉反馈在线RL，提升VLA在接触任务中的适应能力。",
            "reasonTags": [
              "触觉反馈",
              "在线RL",
              "接触丰富操作"
            ],
            "innovationPoints": [
              "触觉-力觉感知VLA预测动作和力序列",
              "在线RL模块在部署时微调策略"
            ],
            "noveltyVerdict": "将触觉与在线RL融入VLA，增强接触任务鲁棒性。",
            "duplicateRisk": "medium",
            "dedupeNote": "区别于离线VLA，专注在线RL细调，触觉信息驱动。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation"
            ]
          },
          {
            "id": "2606.08962v1",
            "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
            "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive.",
            "summaryRaw": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process. Existing acceleration methods reduce this cost by caching and reusing computation within a single chunk's denoising trajectory. Our empirical analysis reveals a substantial source of redundancy they overlook: redundancy across chunks. When a robot executes a smooth behavior, the residuals computed at a given denoising step are strongly correlated from one chunk to the next. We introduce C$^3$ache, a training-free method that caches and reuses these residuals across inference chunks at the same denoising step. Experiments on benchmarks with a Fast-WAM backbone show that C$^3$ache achieves up to a $2.5\\times$ speedup in total wall-clock inference time, with negligible degradation in task success rate.",
            "link": "https://arxiv.org/abs/2606.08962v1",
            "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
            "published": "2026-06-08T03:01:10Z",
            "updated": "2026-06-08T03:01:10Z",
            "authors": [
              "Weisen Zhao",
              "Lam Nguyen",
              "Zhicong Lu",
              "Yuzhang Shang"
            ],
            "categories": [
              "cs.CV",
              "cs.LG",
              "cs.RO"
            ],
            "score": 82,
            "importanceLevel": "A",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 85,
              "novelty": 85,
              "impact": 78,
              "practicality": 88,
              "coreAlignment": 86
            },
            "oneSentenceSummary": "跨推理块缓存加速世界动作模型推理。",
            "summaryCn": "提出C3ache，利用世界动作模型多推理块之间的残差相关性，缓存并复用跨块残差，无需训练即可加速推理，弥补现有方法只重用单块内去噪计算的不足。",
            "whyImportant": "首次利用跨块冗余加速WAM，提高实时性。",
            "reasonTags": [
              "推理加速",
              "世界动作模型",
              "跨块缓存"
            ],
            "innovationPoints": [
              "发现并利用跨块残差相关性实现缓存",
              "训练-free方法，即插即用"
            ],
            "noveltyVerdict": "新颖的跨块缓存策略，显著降低WAM延迟。",
            "duplicateRisk": "low",
            "dedupeNote": "不同于单块内缓存加速，开创跨块冗余利用。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache"
            ]
          },
          {
            "id": "2606.09630v1",
            "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
            "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer t…",
            "summaryRaw": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses it as a semantic reward selector: it predicts a recovery descriptor and reward mask for in-simulation residual-policy training, followed by zero-shot sim-to-real deployment of the trained recovery policies. This decouples high-level failure understanding from low-level corrective control to support different VLAs. Experiments across short-horizon, long-horizon, and contact-rich manipulation tasks show that ReCoVLA outperforms the tested baselines on average. In simulation, our reward compiler improves average success from 36.7% for the fine-tuned $π_{0.5}$ baseline to 66.7%. In physical zero-shot sim-to-real experiments, ReCoVLA achieves the best average performance, with 61.7% success.",
            "link": "https://arxiv.org/abs/2606.09630v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
            "published": "2026-06-08T15:29:09Z",
            "updated": "2026-06-08T15:29:09Z",
            "authors": [
              "Haodi Hu",
              "Chung-Ta Huang",
              "Jing Liu",
              "Ye Wang",
              "Kei Suzuki",
              "Matthew Brand",
              "Toshiaki Koike-Akino"
            ],
            "categories": [
              "cs.AI",
              "cs.LG",
              "cs.RO"
            ],
            "score": 82,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 85,
              "novelty": 82,
              "impact": 80,
              "practicality": 75,
              "coreAlignment": 86
            },
            "oneSentenceSummary": "VLM引导奖励编译实现VLA策略的失败恢复。",
            "summaryCn": "提出ReCoVLA，冻结预训练VLA，用外部VLM推断失败模式，编译任务相关奖励用于残差策略训练，零样本仿真到真实迁移。解耦高层失败理解与低层校正控制。",
            "whyImportant": "用VLM编译奖励，实现通用失败恢复，不修改VLA模型。",
            "reasonTags": [
              "失败恢复",
              "VLM",
              "奖励编译"
            ],
            "innovationPoints": [
              "VLM作为语义奖励选择器指导残差策略训练",
              "仿真到真实零样本迁移恢复策略"
            ],
            "noveltyVerdict": "利用VLM的语义理解规划恢复，无需修改原VLA。",
            "duplicateRisk": "medium",
            "dedupeNote": "不同于内嵌恢复模块，采用外部VLM生成恢复奖励。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies"
            ]
          },
          {
            "id": "2606.09615v1",
            "title": "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience",
            "summary": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance.",
            "summaryRaw": "Dexterous manipulation presents substantial challenges for imitation learning due to its high-dimensional action space and complex contact-rich dynamics. Policies trained purely from demonstrations often suffer from compounding errors during deployment and require large amounts of expert data to achieve reliable performance. To move beyond the limitations of demonstration data, in this work, we propose DexPIE, a post-training framework for dexterous policy improvement from experience collected through real-world deployment. First, DexPIE enables effective exploration coverage through a dexterous-hand-adapted intervention system and multi-stage DAgger-style data collection across initial and intermediate task stages, providing reliable supervision for accurate policy evaluation. To reduce temporal noise between post-training rollouts and demonstration data, we introduce asynchronous inference in the relative action space, which better aligns rollout data with demonstrated behavior and allows the critic to learn a value function induced by a more consistent underlying policy. Finally, DexPIE improves the policy through conditioning on a continuous optimality indicator, allowing the policy to leverage the quality of data in a more fine-grained manner. Across three challenging real-world dexterous manipulation tasks, DexPIE achieves a 37% improvement in success rate over the demonstration-based reference policy, outperforming all baseline methods and demonstrating stronger robustness. The source code and dataset will be made publicly available.",
            "link": "https://arxiv.org/abs/2606.09615v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09615v1",
            "published": "2026-06-08T15:21:45Z",
            "updated": "2026-06-08T15:21:45Z",
            "authors": [
              "Ruizhe Liao",
              "Wenrui Chen",
              "Liangji Zeng",
              "Haoran Lin",
              "Fan Yang",
              "Kailun Yang",
              "Yaonan Wang"
            ],
            "categories": [
              "cs.CV",
              "cs.RO"
            ],
            "score": 80,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 75,
              "novelty": 78,
              "impact": 85,
              "practicality": 80,
              "coreAlignment": 65
            },
            "oneSentenceSummary": "通过真实世界经验稳定提升灵巧操作策略。",
            "summaryCn": "提出DexPIE，利用手部适配干预系统多阶段DAgger数据收集，以及异步推理精炼器，从真实世界部署中收集经验提升灵巧操作策略，缓解演示数据偏差。",
            "whyImportant": "实现少样本灵巧操作策略的在线提升，降低人工采集需求。",
            "reasonTags": [
              "灵巧操作",
              "策略提升",
              "真实世界经验"
            ],
            "innovationPoints": [
              "多阶段DAgger避免协同误差",
              "异步推理处理延迟噪声"
            ],
            "noveltyVerdict": "有效利用少量部署数据提升灵巧操作。",
            "duplicateRisk": "medium",
            "dedupeNote": "专注于灵巧手，与VLA的失败恢复不同。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "DexPIE: Stable Dexterous Policy Improvement from Real-World Experience"
            ]
          },
          {
            "id": "2606.09258v1",
            "title": "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection",
            "summary": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences.",
            "summaryRaw": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences. We propose Back to the Familiar Future (B2FF), a recovery framework for foresight-driven VLAs that leverages future visual conditioning as a recovery interface. Before execution, the VLA generates a milestone bank of familiar future states conditioned on the clean initial observation. At recovery time, a recoverability-aware selector selects a recovery milestone from this bank and enforces it as a fixed visual goal. This enables the VLA to robustly map off-trajectory observations back to a familiar future. On failure-injected LIBERO, under controlled recovery timing aligned with the injected failure, B2FF increases the average success rate of a baseline VLA from 56.3% to 74.0%, demonstrating that pre-imagined milestones can guide recovery without fine-tuning the low-level action generator.",
            "link": "https://arxiv.org/abs/2606.09258v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09258v1",
            "published": "2026-06-08T09:30:38Z",
            "updated": "2026-06-08T09:30:38Z",
            "authors": [
              "Suyeon Shin",
              "Juwon Kim",
              "Hyeonbin Park",
              "Hyunseo Kim",
              "Hyundo Lee",
              "Hyung-Sin Kim",
              "Byoung-Tak Zhang"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 80,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 83,
              "novelty": 78,
              "impact": 72,
              "practicality": 75,
              "coreAlignment": 84
            },
            "oneSentenceSummary": "通过预想象里程碑选择实现VLA策略失败恢复。",
            "summaryCn": "提出B2FF，在干净初始观察条件生成熟悉未来状态里程碑库，恢复时用可恢复性感知选择器选取里程碑作为固定视觉目标，将脱轨观测映射回熟悉未来。",
            "whyImportant": "利用未来视觉条件化实现VLA策略的可靠失败恢复。",
            "reasonTags": [
              "失败恢复",
              "视觉里程碑",
              "VLA"
            ],
            "innovationPoints": [
              "预想象熟悉未来状态作为恢复界面",
              "可恢复性选择器确保有效里程碑"
            ],
            "noveltyVerdict": "创新地使用预生成视觉目标引导故障恢复。",
            "duplicateRisk": "medium",
            "dedupeNote": "与ReCoVLA不同，B2FF依赖VLA自身的未来视觉想象。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection"
            ]
          },
          {
            "id": "2606.08992v1",
            "title": "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning",
            "summary": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on…",
            "summaryRaw": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on local visual cues and linear history-based reasoning, overlooking the spatial nature of navigation across explored regions, traversed paths, landmarks, and their spatial relations. In this paper, we propose SpaceVLN, a navigation agent built around Spatial Cognitive Memory and Task-Guided Spatial Reasoning. Specifically, SpaceVLN introduces an efficient stagewise closed-loop framework where planning and execution are organized around verifiable space--landmark stages. During navigation, the agent progressively abstracts explored regions into Spatial Waypoints and dynamically maintains subtask-grounded landmark evidence, forming a hierarchical Spatial Cognitive Memory for progress localization and spatial-relation understanding. Built on this memory, Spatial-CoT integrates task-progress reasoning with spatial perception, analysis, and prediction, enabling Task-Guided Spatial Reasoning for embodied navigation. The unified stage interface enables SpaceVLN to address both Vision-and-Language Navigation and Object-Goal Navigation under a unified zero-shot setting, without task-specific policy training. Across R2R-CE, RxR-CE, GN-Bench, and HM3D-OVON, SpaceVLN achieves state-of-the-art zero-shot performance, and real-robot deployment further validates its applicability. These results highlight Spatial Cognitive Memory and Task-Guided Spatial Reasoning as a practical foundation for stronger embodied navigation agents.",
            "link": "https://arxiv.org/abs/2606.08992v1",
            "pdfLink": "https://arxiv.org/pdf/2606.08992v1",
            "published": "2026-06-08T03:42:08Z",
            "updated": "2026-06-08T03:42:08Z",
            "authors": [
              "Yucheng Deng",
              "Pingrui Lai",
              "Xinhai Li",
              "Chenjia Bai",
              "Xiaoheng Deng",
              "Chengnuo Sun",
              "Xuelong Li",
              "Hua Yang"
            ],
            "categories": [
              "cs.AI",
              "cs.CV",
              "cs.RO"
            ],
            "score": 78,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 75,
              "novelty": 80,
              "impact": 82,
              "practicality": 80,
              "coreAlignment": 70
            },
            "oneSentenceSummary": "零样本视觉-语言导航代理，具有在线空间认知记忆与推理。",
            "summaryCn": "提出SpaceVLN，围绕空间认知记忆和任务引导空间推理，采用阶段式闭环框架，将规划与执行组织到可验证的空间地标阶段。渐进构建空间路点图，实现高效零样本导航。",
            "whyImportant": "在连续环境中实现零样本语言导航，提升空间推理能力。",
            "reasonTags": [
              "视觉语言导航",
              "空间推理",
              "零样本"
            ],
            "innovationPoints": [
              "空间认知记忆抽象探索区域为路点",
              "任务引导的空间推理规划",
              "阶段式闭环框架验证规划"
            ],
            "noveltyVerdict": "将空间记忆与推理融入VLN，提升复杂环境导航。",
            "duplicateRisk": "low",
            "dedupeNote": "专注导航的空间认知模型，不同于操作VLA。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning"
            ]
          },
          {
            "id": "2606.09457v1",
            "title": "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models",
            "summary": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting.",
            "summaryRaw": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting. We introduce $ω$-EVA, a latent interactive world model that realizes an Envision--Verify--Act loop for embodied action generation. Its three-stage framework learns action-conditioned latent dynamics, trains a language-conditioned flow policy on dynamics-aware visual representations, and feeds the policy's proposal back through the world model. A tri-branch refiner jointly reasons over the current state, proposal-conditioned future, and proposed action to produce the final action chunk. Because consequence reasoning remains in latent feature space, $ω$-EVA avoids generating future videos at inference. Evaluations across diverse single-arm, bimanual, long-horizon, and perturbed simulation settings show that the complete interaction pipeline consistently improves the proposal policy, while latent diagnostics indicate meaningful action-conditioned future structure. With approximately 1.2B parameters and no additional robot-data pretraining, $ω$-EVA demonstrates a compact and competitive performance--scale--data trade-off, making the world model an active action-feedback module rather than a passive predictor.",
            "link": "https://arxiv.org/abs/2606.09457v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09457v1",
            "published": "2026-06-08T13:12:56Z",
            "updated": "2026-06-08T13:12:56Z",
            "authors": [
              "Zhenguo Sun",
              "Yu Sun",
              "Hande Huang",
              "Alois Knoll"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 78,
            "importanceLevel": "A",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 82,
              "novelty": 80,
              "impact": 72,
              "practicality": 70,
              "coreAlignment": 80
            },
            "oneSentenceSummary": "潜在交互世界模型实现设想-验证-行动循环。",
            "summaryCn": "提出ω-EVA，学习动作条件潜在动态，训练语言条件流策略，将策略提案反馈通过世界模型，由三分支精炼器联合推理当前状态、提案未来和动作，产生最终动作块。",
            "whyImportant": "实现内在设想验证，提升动作生成的可靠性和一致性。",
            "reasonTags": [
              "交互世界模型",
              "设想-验证-行动",
              "潜在动态"
            ],
            "innovationPoints": [
              "设想-验证-行动闭环避免生成未来视频",
              "潜在空间一致性推理"
            ],
            "noveltyVerdict": "将世界模型用于内部动作验证，提升决策质量。",
            "duplicateRisk": "medium",
            "dedupeNote": "区别于生成完整视频的WAM，在潜在空间验证。",
            "retrievalGroups": [
              "category",
              "robotics",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models"
            ]
          },
          {
            "id": "2606.09243v1",
            "title": "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video",
            "summary": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions.",
            "summaryRaw": "Estimating full-hand grasp pressure from egocentric video is critical for immersive VR and robotic manipulation, yet dense tactile sensing often relies on intrusive hardware. Existing vision-based methods predominantly rely on planar surfaces or fingertip contacts, failing to generalize to complex 3D object interactions. Therefore, we introduce EgoTactile, a benchmark pairing egocentric video with full-hand pressure supervision for diverse everyday objects, incorporating a bare-hand transfer subset to enable generalization to natural scenarios. Leveraging this benchmark, we first establish EgoPressureFormer as a discriminative baseline. Beyond this, to explicitly address the uncertainty in partial observations, we propose EgoPressureDiff, a conditional diffusion framework that adapts a large-scale pre-trained video diffusion backbone. By combining rich world knowledge priors with a Physically-Informed Feature Rectification layer to inject semantic constraints, our approach effectively infers plausible contact patterns and resolves visual-physical ambiguities. Extensive experiments demonstrate that our method achieves superior performance on the benchmark and robust transferability to in-the-wild scenarios. Our project page is available at https://egotactile.github.io/.",
            "link": "https://arxiv.org/abs/2606.09243v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09243v1",
            "published": "2026-06-08T09:20:03Z",
            "updated": "2026-06-08T09:20:03Z",
            "authors": [
              "Yuan Zeng",
              "Yujia Shi",
              "Tiao Tan",
              "Xingting Li",
              "Yaqi Qin",
              "Zongqing Lu",
              "Wenming Yang",
              "Jing-Hao Xue"
            ],
            "categories": [
              "cs.AI",
              "cs.CV"
            ],
            "score": 72,
            "importanceLevel": "B",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 72,
              "novelty": 80,
              "impact": 70,
              "practicality": 75,
              "coreAlignment": 60
            },
            "oneSentenceSummary": "从自我中心视频学习日常物体抓取压力。",
            "summaryCn": "提出EgoTactile基准，配对自我中心视频与全手压力监督。建立EgoPressureFormer基线，并提出EgoPressureDiff扩散框架与物理碰撞先验，实现稠密压力估计。",
            "whyImportant": "无需专用硬件，从普通视频预测抓取压力，助力远程操作。",
            "reasonTags": [
              "抓取压力",
              "视觉触觉",
              "扩散模型"
            ],
            "innovationPoints": [
              "大规模视频-压力配对基准",
              "视频扩散模型结合物理先验"
            ],
            "noveltyVerdict": "首次实现日常物体全手压力预测，非VLA核心。",
            "duplicateRisk": "low",
            "dedupeNote": "非VLA/WAM核心，但触觉感知对操作有增量价值。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "EgoTactile: Learning Grasp Pressure for Everyday Objects from Egocentric Video"
            ]
          },
          {
            "id": "2606.09640v1",
            "title": "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics",
            "summary": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a…",
            "summaryRaw": "Accurate dynamics models are essential for model-based robotic control, yet nominal Euler--Lagrange models often become inaccurate in the presence of payload variation, unmodeled coupling, friction, aerodynamic effects, and changing operating conditions. Most learning-based correction methods improve prediction accuracy by introducing a single additive residual, but do not preserve the internal mechanical structure of Euler--Lagrange systems. This leads to models that do not preserve symmetry, positive-definiteness, or the coupling between inertia and velocity-dependent terms, which can result in physically inconsistent predictions and reduced reliability when embedded in model-based controllers. We propose a structure-preserving residual learning framework that decomposes model mismatch into an inertia correction, the corresponding induced Coriolis term, and a generalized-force residual. The mechanical component is learned under physical constraints, while the disturbance-sensitive component is represented through a sparse history-dependent latent interaction model and adapted online using Bayesian linear regression. This separation preserves key mechanical structure while restricting adaptation to the part of the dynamics most affected by changing conditions. Experiments across multiple robotic platforms, including mobile, aerial, and manipulator systems, show that the proposed method improves dynamics prediction and trajectory tracking under coupled and time-varying dynamics. These results highlight the value of combining structured residual modeling, compact latent interaction selection, and selective online adaptation for real-world model-based control.",
            "link": "https://arxiv.org/abs/2606.09640v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09640v1",
            "published": "2026-06-08T15:36:00Z",
            "updated": "2026-06-08T15:36:00Z",
            "authors": [
              "Rishabh Dev Yadav",
              "Samaksh Ujjawal",
              "Sihao Sun",
              "Spandan Roy",
              "Wei Pan"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 70,
            "importanceLevel": "B",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 70,
              "novelty": 72,
              "impact": 75,
              "practicality": 70,
              "coreAlignment": 65
            },
            "oneSentenceSummary": "结构保持残差学习与在线自适应机器人动力学。",
            "summaryCn": "提出物理感知稀疏学习框架，将模型失配分解为惯性校正和诱导科里奥利项，保持正定性。结合稀疏诱导正则和选择性在线自适应，实现高效长期预测。",
            "whyImportant": "提升机械臂动力学模型精度，支撑模型基控制与规划。",
            "reasonTags": [
              "动力学建模",
              "物理感知",
              "残差学习"
            ],
            "innovationPoints": [
              "结构保持分解保持物理一致性",
              "稀疏学习与在线自适应"
            ],
            "noveltyVerdict": "改进动力学残差学习，保持欧拉-拉格朗日结构。",
            "duplicateRisk": "medium",
            "dedupeNote": "聚焦经典控制理论，不同于学习世界模型。",
            "retrievalGroups": [
              "category",
              "robotics",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Physics-Aware Sparse Learning and Selective Online Adaptation for Euler-Lagrange Robot Dynamics"
            ]
          },
          {
            "id": "2606.09507v1",
            "title": "Prisma-World: Camera-Controllable Multi-Agent Video World Model",
            "summary": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of…",
            "summaryRaw": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of the same scene, leading to inconsistent objects, layouts, and appearances across agents. Conventional camera conditioning controls individual trajectories, but it does not explicitly couple the generation of views that should agree under shared scene geometry. We introduce Prisma-World, a camera-controllable multi-agent world model that formulates multi-agent generation as a joint geometry-aware denoising process for cross-view consistency. Prisma-World processes all agent videos within one full-attention sequence, uses a multi-agent RoPE design to distinguish agent identities while preserving synchronized temporal coordinates, and injects relative camera geometry into attention to bias overlapping viewpoints toward shared scene evidence. To further strengthen multi-view consistency and enhance global spatial perception, we augment our framework with an overlap-decaying curriculum training paradigm alongside minimap-conditioned structural guidance. To facilitate the training and evaluation of multi-agent models, we introduce PrismaDataset, a large-scale UE5 dataset with panoramic acquisition across diverse scenes, composable multi-agent view groups with flexible agent counts and complex camera trajectories, and precise camera/action annotations for consistency training and evaluation. Experiments show that a single Prisma-World model can generate high-fidelity multi-agent videos with flexible agent numbers, camera controllability, improved cross-view consistency, and spatial grounding under minimap guidance.",
            "link": "https://arxiv.org/abs/2606.09507v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09507v1",
            "published": "2026-06-08T13:59:50Z",
            "updated": "2026-06-08T13:59:50Z",
            "authors": [
              "Huiqiang Sun",
              "Zhan Peng",
              "Size Wu",
              "Kun Wang",
              "Kang Liao",
              "Dianyi Wang",
              "Xingyu Zeng",
              "Sheng Jin"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 70,
            "importanceLevel": "B",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 70,
              "novelty": 85,
              "impact": 65,
              "practicality": 60,
              "coreAlignment": 70
            },
            "oneSentenceSummary": "相机可控多智能体视频世界模型，保证跨视图一致性。",
            "summaryCn": "提出Prisma-World，通过联合几何感知去噪过程生成多智能体视频，使用多智能体RoPE区分视角，保证重叠区域场景对象一致，支持可控相机运动的多智能体视觉模拟。",
            "whyImportant": "实现多智能体3D一致世界模拟，可用于协同场景生成。",
            "reasonTags": [
              "多智能体",
              "视频世界模型",
              "跨视图一致"
            ],
            "innovationPoints": [
              "联合去噪保证几何一致性",
              "多智能体RoPE视角编码",
              "相机可控"
            ],
            "noveltyVerdict": "首次将几何一致性引入多智能体视频生成世界模型。",
            "duplicateRisk": "low",
            "dedupeNote": "专注多智能体一致性，区别于单视图世界模型。",
            "retrievalGroups": [
              "category",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Prisma-World: Camera-Controllable Multi-Agent Video World Model"
            ]
          },
          {
            "id": "2606.09286v1",
            "title": "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands",
            "summary": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap.",
            "summaryRaw": "Humanoid robots hold immense potential for real-world assistance, yet agile interaction with objects in unstructured environments demands tightly coupled whole-body coordination. Despite recent advancements, current controllers face a critical deployment gap. They rely heavily on dense reference trajectories and perfect state observability, which inherently limits physical generalization. We present Vision Guided Agile Interaction Control (VAIC), a unified framework that bridges this gap by operating exclusively on onboard depth, historical proprioception, and a decoupled user command interface. VAIC employs a two-stage distillation paradigm. First, a privileged teacher policy masters diverse interaction skills using precise object kinematics and exact environmental states. Second, a deployable student policy distills these capabilities by replacing full body tracking with velocity targets across multiple axes and an interaction indicator for each frame. The student utilizes a recurrent object adaptation module to implicitly infer unobservable object dynamics from raw depth streams and proprioception. Evaluations and real-world deployments on the humanoid robot demonstrate that a single VAIC policy successfully executes highly diverse dynamic tasks. These tasks include box carrying, cart interaction, and skateboarding, consistently outperforming baselines and advancing autonomous humanoid deployment.",
            "link": "https://arxiv.org/abs/2606.09286v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09286v1",
            "published": "2026-06-08T09:52:55Z",
            "updated": "2026-06-08T09:52:55Z",
            "authors": [
              "Dongting Li",
              "Qianyang Wu",
              "Xingyu Chen",
              "Liang Li",
              "Yuhang Lin",
              "Sikai Wu",
              "Guoyao Zhang",
              "Mingliang Zhou"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 69,
            "importanceLevel": "B",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 65,
              "novelty": 78,
              "impact": 70,
              "practicality": 70,
              "coreAlignment": 55
            },
            "oneSentenceSummary": "解耦命令的视觉引导人形灵动物体交互控制。",
            "summaryCn": "提出VAIC，用两阶段蒸馏范式从特权老师策略蒸馏到仅需深度、历史本体感和解耦命令的学生策略。实现人形机器人敏捷交互。",
            "whyImportant": "仅依赖机载传感器实现人形灵活交互，减少真机部署差距。",
            "reasonTags": [
              "人形控制",
              "视觉引导",
              "蒸馏"
            ],
            "innovationPoints": [
              "两步蒸馏从全状态到部分可观测",
              "速度目标取代全身跟踪"
            ],
            "noveltyVerdict": "有效缩小仿真到真实差距的人形控制框架。",
            "duplicateRisk": "low",
            "dedupeNote": "聚焦人形交互控制，非VLA。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "VAIC: Vision-Guided Humanoid Agile Object Interaction Control via Decoupled Commands"
            ]
          },
          {
            "id": "2606.09559v1",
            "title": "Safe-RULE: Safe Reinforcement UnLEarning",
            "summary": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induc…",
            "summaryRaw": "Offline safe reinforcement learning (Safe RL) enables policy learning without online interactions, making it suitable for safety-critical systems such as robotics systems. However, its reliance on static datasets exposes offline Safe RL to data poisoning attacks, where adversaries inject malicious samples that compromise safety and induce unsafe policy behavior. In this work, we propose a new learning paradigm, named safe reinforcement unlearning (Safe-RULE), used as a defense framework to remove the influence of poisoned data without retraining from scratch or requiring access to the original training environment. We further extend reinforcement unlearning to offline Safe RL by explicitly accounting for both task performance and safety constraints during the unlearning process. Experiments across benchmark Safe RL tasks demonstrate that our approach effectively enhances safety performance against data poisoning attacks.",
            "link": "https://arxiv.org/abs/2606.09559v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09559v1",
            "published": "2026-06-08T14:33:40Z",
            "updated": "2026-06-08T14:33:40Z",
            "authors": [
              "Shixiong Jiang",
              "Taozheng Zhu",
              "Fanxin Kong"
            ],
            "categories": [
              "cs.AI",
              "cs.LG",
              "cs.RO"
            ],
            "score": 68,
            "importanceLevel": "B",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 65,
              "novelty": 75,
              "impact": 70,
              "practicality": 70,
              "coreAlignment": 55
            },
            "oneSentenceSummary": "安全强化遗忘学习，防御离线安全RL数据投毒。",
            "summaryCn": "提出Safe-RULE，移除毒化数据影响无需从头训练，在离线安全RL中同时考虑任务表现和安全约束进行遗忘学习。提升安全性能。",
            "whyImportant": "强化学习安全性，抵御数据攻击，提升策略安全。",
            "reasonTags": [
              "安全RL",
              "遗忘学习",
              "数据投毒"
            ],
            "innovationPoints": [
              "安全强化遗忘范式",
              "无需环境交互的防御"
            ],
            "noveltyVerdict": "引入遗忘学习至安全RL，新颖防御范式。",
            "duplicateRisk": "low",
            "dedupeNote": "聚焦安全防御，非VLA/WAM核心。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Safe-RULE: Safe Reinforcement UnLEarning"
            ]
          },
          {
            "id": "2606.09569v1",
            "title": "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications",
            "summary": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness.",
            "summaryRaw": "With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and robot navigation. Relative pose estimation in multi-camera systems is essential for accurate vehicle localization and environment perception, demanding high real-time performance and robustness. Existing methods, however, often involve high computational costs and rely heavily on abundant feature matches, limiting their applicability in time-sensitive driving scenarios. To address these limitations, this paper introduces a unified framework for efficient relative pose estimation, built upon a novel translation parameterization and first-order rotation approximation. Within this framework, we propose three efficient minimal solvers specifically designed for autonomous vehicles. The first solver integrates the vertical direction prior from Inertial Measurement Units (IMUs), the second utilizes the rotation axis direction prior during steering maneuvers, and the third is designed for planar motion - a realistic assumption for ground vehicles operating on structured roads. By reducing both the minimal number of point correspondences and the algebraic complexity, our methods enable faster hypothesis generation within RANSAC-based pipelines, improving suitability for real-time systems. Extensive experiments on synthetic datasets and the KITTI autonomous driving benchmark demonstrate that the proposed solvers achieve a favorable balance between speed and accuracy compared to existing state-of-the-art algorithms.",
            "link": "https://arxiv.org/abs/2606.09569v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09569v1",
            "published": "2026-06-08T14:43:53Z",
            "updated": "2026-06-08T14:43:53Z",
            "authors": [
              "Tao Li",
              "Liang Liu",
              "Jianli Han",
              "Weimin Lv"
            ],
            "categories": [
              "cs.CV",
              "cs.RO"
            ],
            "score": 74,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 39,
              "novelty": 22,
              "impact": 14,
              "practicality": 8,
              "coreAlignment": 25
            },
            "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：With the advancement of visual sensing systems, computer vision is playing an increasingly important role in autonomous driving and…",
            "whyImportant": "命中机器人、自动驾驶、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "机器人",
              "自动驾驶",
              "新基准",
              "通用框架"
            ],
            "innovationPoints": [
              "包含新基准或新数据评测"
            ],
            "noveltyVerdict": "创新信号强，像是带新范式或新基准的工作。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [
              "category",
              "driving",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Efficient Minimal Solvers for Relative Pose Estimation in Autonomous Driving Applications"
            ]
          },
          {
            "id": "2606.09499v1",
            "title": "Targeting World Models to Compromise Robot Learning Pipelines",
            "summary": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models i…",
            "summaryRaw": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models introduce a uniquely stealthy and effective data poisoning entry point into the robot learning supply chain that can result in the deployment of unsafe or otherwise compromised robotic policies despite training on seemingly safe ground truth training data. In contrast to traditional data poisoning techniques which directly implant dangerous trajectories into sold or uploaded datasets, our novel attack methods inject malicious prompts or compromising transition dynamics into visibly safe teleoperated datasets which are only activated once fed through a world model as input. This can result in the generation of synthetic, dangerous robot training trajectories and subsequently unsafe or compromised robot policies. We demonstrate the effectiveness of our attacks against both state of the art action conditioned and text conditioned world models, showing a full end-to-end backdoor on a downstream DRL policy and a proof-of-concept for the VLA setting. Overall these findings necessitate research into more secure world models and reevaluating their position within the robot learning supply chain.",
            "link": "https://arxiv.org/abs/2606.09499v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09499v1",
            "published": "2026-06-08T13:50:31Z",
            "updated": "2026-06-08T13:50:31Z",
            "authors": [
              "Ethan Rathbun",
              "Ahmed Agha",
              "Saaduddin Mahmud",
              "Christopher Amato",
              "Alina Oprea",
              "Eugene Bagdasarian"
            ],
            "categories": [
              "cs.AI",
              "cs.RO"
            ],
            "score": 72,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 47,
              "novelty": 12,
              "impact": 9,
              "practicality": 13,
              "coreAlignment": 25
            },
            "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating…",
            "whyImportant": "命中VLA、WAM、机器人、新基准主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "机器人",
              "新基准"
            ],
            "innovationPoints": [
              "包含新基准或新数据评测"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [
              "category",
              "robotics",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Targeting World Models to Compromise Robot Learning Pipelines"
            ]
          },
          {
            "id": "2606.09218v1",
            "title": "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM",
            "summary": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges t…",
            "summaryRaw": "As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal information and visual motion estimation, characterized by their high temporal resolution, low latency, and minimal power consumption. However, their asynchronous data streams present significant challenges to traditional synchronous, frame-based algorithms. To address these challenges, this paper presents a novel framework for full degree of freedom (DoF) egomotion estimation directly from asynchronous optical flow, specifically targeting the joint recovery of angular and linear velocities. We decouple the differential epipolar constraint into distinct angular and linear velocity components, and derive its formulation for asynchronous data. Based on this formulation, an optimization algorithm is developed that enables full-DoF egomotion estimation leveraging at least five points. Furthermore, by applying a first-order approximation to rotational dynamics, we transform the constraint equations into a polynomial form, resulting in the first algebraic minimal 5-point solver for this formulation. To ensure real-time performance in high-speed scenarios, we additionally propose an accelerated solver achieved by truncating high-order angular velocity terms. Extensive evaluations on both synthetic and real-world datasets demonstrate that the asynchronous approach outperforms traditional synchronous methods, particularly in its accuracy and robustness to spatiotemporal noise. We believe that this work establishes a critical foundation for efficient and accurate continuous-time motion estimation in high-speed robotics applications.",
            "link": "https://arxiv.org/abs/2606.09218v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09218v1",
            "published": "2026-06-08T08:51:29Z",
            "updated": "2026-06-08T08:51:29Z",
            "authors": [
              "Shuo Pan",
              "Banglei Guan",
              "Bin Li",
              "Zhenbao Yu",
              "Zibin Liu",
              "Zi Wang",
              "Yang Shang",
              "Qifeng Yu"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 61,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 30,
              "novelty": 17,
              "impact": 9,
              "practicality": 8,
              "coreAlignment": 11
            },
            "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：As a bio-inspired intelligent sensor, event cameras have introduced a new paradigm in the intelligent perception of spatiotemporal…",
            "whyImportant": "命中机器人、新基准、通用框架、真实实验主题，分类覆盖cs.CV，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "机器人",
              "新基准",
              "通用框架",
              "真实实验"
            ],
            "innovationPoints": [
              "包含新基准或新数据评测",
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Minimal Solvers for Full-DoF Motion Estimation from Asynchronous Differential SfM"
            ]
          },
          {
            "id": "2606.09268v1",
            "title": "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation",
            "summary": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide d…",
            "summaryRaw": "Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obstacle perception. A common strategy to achieve these capabilities involves integrating diverse sensing modalities: cameras offer rich visual features for localization, while active sensors like LiDAR provide direct metric measurements. However, such multi-sensor configurations necessitate complex spatial-temporal calibration and increase deployment overhead. Although vision-only approaches offer a low-cost and scalable alternative, existing monocular visual systems typically struggle to simultaneously achieve efficient, globally consistent localization and dense, metric-consistent geometric perception. To bridge this gap, we propose \\textbf{VGP-Nav}, a unified framework for \\textit{Metric-Aware Visual Geometric Perception} that relies solely on monocular RGB input to jointly support metric localization and obstacle perception. Our key insight is to anchor localization-grounded visual geometry to physically meaningful scale constraints derived from ground-plane geometry, thereby providing a reliable metric reference for monocular perception. VGP-Nav resolves monocular scale ambiguity online and produces localization-grounded, metric obstacle representations that are directly applicable to downstream planning. Extensive experiments demonstrate strong generalization across diverse environments and successful deployment on real mobile robots, highlighting the practicality of our approach for scalable, low-cost, and safe autonomous navigation.",
            "link": "https://arxiv.org/abs/2606.09268v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09268v1",
            "published": "2026-06-08T09:38:14Z",
            "updated": "2026-06-08T09:38:14Z",
            "authors": [
              "Hewei Pan",
              "Weiye Zhu",
              "Zekai Zhang",
              "Zitong Huang",
              "Rongtao Xu",
              "Jinbao Wang",
              "Feng Zheng"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 58,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 29,
              "novelty": 16,
              "impact": 6,
              "practicality": 13,
              "coreAlignment": 14
            },
            "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Reliable robotic navigation necessitates the seamless integration of accurate global localization and dense, metric-consistent obst…",
            "whyImportant": "命中机器人、通用框架主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "机器人",
              "通用框架"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "VGP-Nav: Metric-Aware Visual Geometric Perception for Robot Navigation"
            ]
          }
        ],
        "vla": [
          {
            "id": "2606.09572v1",
            "title": "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control",
            "summary": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient tas…",
            "summaryRaw": "Vision-language-action models have shown strong promise for robot manipulation, yet raw language is primarily needed to specify task intent rather than to be repeatedly processed during high-frequency low-level execution. Motivated by this separation, we propose a cerebello-thalamic-inspired vision-action model (CT-VAM) for efficient task-conditioned visuomotor control. CT-VAM acts as a compact local execution policy that predicts action chunks from dualview visual observations, proprioception, and a lightweight task condition, potentially enabling a practical cloud-edge paradigm in which high-level semantic reasoning can be handled by large models while fast closed-loop control runs on local hardware. To fuse heterogeneous inputs effectively, CT-VAM introduces TARS (Thalamic Action Routing Stream), a stream-separated conditional attention decoder that independently routes action, visual and task streams, preventing dense sensory tokens from overwhelming compact task-relevant conditions. With only 68M parameters, CT-VAM achieves LIBERO success rates competitive with substantially larger VLA models, while reducing inference latency. Together with flow-consistent inpainting for asynchronous chunk execution, CT-VAM supports high-frequency control and demonstrates robust realworld deployment on resource-constrained robotic platforms.",
            "link": "https://arxiv.org/abs/2606.09572v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09572v1",
            "published": "2026-06-08T14:46:43Z",
            "updated": "2026-06-08T14:46:43Z",
            "authors": [
              "Jiacheng Li",
              "Yize Guo",
              "Jiabin Guo",
              "Qingchen Liu",
              "Jiahu Qin"
            ],
            "categories": [
              "cs.AI",
              "cs.RO"
            ],
            "score": 95,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 95,
              "novelty": 93,
              "impact": 88,
              "practicality": 90,
              "coreAlignment": 96
            },
            "oneSentenceSummary": "受小脑-丘脑启发的视觉动作模型，实现高效任务条件视觉运动控制。",
            "summaryCn": "提出CT-VAM，通过双视图视觉、本体感知和轻量级任务条件预测动作块。引入TARS流分离条件注意力解码器，独立路由动作、视觉和本体感知token。支持云端大模型高层推理与本地快速闭环控制协同。",
            "whyImportant": "实现高效视觉运动控制，分离高层推理与低频执行，推动云端-边缘架构。",
            "reasonTags": [
              "视觉动作模型",
              "端侧高效推理",
              "小脑-丘脑启发"
            ],
            "innovationPoints": [
              "小脑-丘脑启发式架构解耦任务意图与实时控制",
              "TARS流分离条件注意力，独立路由多模态输入",
              "轻量级本地策略支持高频闭环控制"
            ],
            "noveltyVerdict": "架构新颖，将生物启发引入VLA，分离推理与控制。",
            "duplicateRisk": "low",
            "dedupeNote": "首次从神经科学角度设计VLA解耦架构。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "CT-VAM: A Cerebello-Thalamic-Inspired Vision-Action Model for Efficient Visuomotor Control"
            ]
          },
          {
            "id": "2606.09009v1",
            "title": "Scaling by Diversified Experience for Vision-Language-Action Models",
            "summary": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences.",
            "summaryRaw": "Vision-Language-Action models face significant challenges in real-world deployment due to the entanglement of high-level reasoning with low-level control, and the instability of policy optimization. In this paper, we introduce SyVLA, a robust VLA model trained with diversified experiences. We propose an Intention Decoupling algorithm to isolate control-relevant features from reasoning contexts and a similar-sample guided RL pipeline to stabilize policy updates and mitigate distribution shift. Extensive experiments on real-world robotic tasks and multi-modal benchmarks demonstrate that SyVLA achieves superior task success rates and stronger out-of-distribution generalization compared to existing methods, while effectively preserving core vision-language capabilities. Codes and Datasets is released on \\href{https://sy-vla.github.io/}{project page}.",
            "link": "https://arxiv.org/abs/2606.09009v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09009v1",
            "published": "2026-06-08T04:13:38Z",
            "updated": "2026-06-08T04:13:38Z",
            "authors": [
              "Leiyu Wang",
              "Zhaofengnian Wang",
              "Xueqi Li",
              "Luoyi Fan",
              "Cewu Lu",
              "Nanyang Ye"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 94,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 91,
              "impact": 85,
              "practicality": 82,
              "coreAlignment": 92
            },
            "oneSentenceSummary": "通过多样化经验训练鲁棒VLA模型，解耦意图与稳定策略优化。",
            "summaryCn": "提出SyVLA，利用多样化经验和意图解耦算法隔离控制相关特征，以及相似样本引导的RL管道稳定策略更新。在真实机器人任务和多模态基准上展示优越泛化能力。",
            "whyImportant": "解决VLA高层推理与低层控制纠缠，提升分布外泛化。",
            "reasonTags": [
              "多样化经验",
              "意图解耦",
              "鲁棒VLA"
            ],
            "innovationPoints": [
              "意图解耦算法隔离推理与控制特征",
              "相似样本引导RL稳定训练，缓解分布偏移"
            ],
            "noveltyVerdict": "在VLA训练策略上创新，有效提升鲁棒性。",
            "duplicateRisk": "low",
            "dedupeNote": "将意图解耦与RL稳定化结合，区别于纯模仿学习。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Scaling by Diversified Experience for Vision-Language-Action Models"
            ]
          },
          {
            "id": "2606.09337v1",
            "title": "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation",
            "summary": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies.",
            "summaryRaw": "Vision-Language-Action (VLA) models have become a powerful framework for robotic manipulation, and recent studies have introduced tactile or force feedback into VLAs to address contact-rich tasks. However, these models are typically deployed as offline policies. When contact conditions shift from the training distribution, the policy cannot perform online adaptation, leading to problems such as inappropriate contact forces and inefficient retries. Therefore, we propose TORL-VLA, a tactile-guided online reinforcement learning framework that couples tactile feedback with policy refinement for contact-rich manipulation. Our method introduces a tactile-derived wrench-aware VLA to predict reference actions and future wrench sequences, while a lightweight online RL module is used to refine the reference actions. To stabilize learning from mixed exploratory policy-generated and human-intervention data, we introduce an intervention-censored critic that prevents post-intervention success from being wrongly credited to policy-generated actions preceding intervention. Real-robot experiments on long-horizon contact-rich tasks, including latch manipulation, coffee-cup placement, and egg handling, show that TORL-VLA improves success rates at both subtask and full-task levels, as well as time-bounded execution efficiency over strong baselines.",
            "link": "https://arxiv.org/abs/2606.09337v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09337v1",
            "published": "2026-06-08T11:05:05Z",
            "updated": "2026-06-08T11:05:05Z",
            "authors": [
              "Huaihang Zheng",
              "Yi Yang",
              "Kai Ma",
              "Shenglin Xu",
              "Tian Xie",
              "Guozheng Li",
              "Xiangyu Wang",
              "Yiren Ma"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 85,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 88,
              "novelty": 80,
              "impact": 75,
              "practicality": 78,
              "coreAlignment": 86
            },
            "oneSentenceSummary": "触觉引导在线强化学习用于接触丰富操作的VLA。",
            "summaryCn": "提出TORL-VLA，结合触觉衍生力觉感知VLA预测参考动作和未来力序列，并用轻量在线RL模块优化参考动作。通过混合探索策略和在线学习稳定训练。",
            "whyImportant": "引入触觉反馈在线RL，提升VLA在接触任务中的适应能力。",
            "reasonTags": [
              "触觉反馈",
              "在线RL",
              "接触丰富操作"
            ],
            "innovationPoints": [
              "触觉-力觉感知VLA预测动作和力序列",
              "在线RL模块在部署时微调策略"
            ],
            "noveltyVerdict": "将触觉与在线RL融入VLA，增强接触任务鲁棒性。",
            "duplicateRisk": "medium",
            "dedupeNote": "区别于离线VLA，专注在线RL细调，触觉信息驱动。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "TORL-VLA: Tactile Guided Online Reinforcement Learning for Contact-Rich Manipulation"
            ]
          },
          {
            "id": "2606.09630v1",
            "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
            "summary": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer t…",
            "summaryRaw": "Vision-language-action (VLA) policies provide strong priors for language-conditioned manipulation, but remain brittle in off-nominal states requiring targeted recovery. We propose ReCoVLA -- a failure-conditioned residual recovery framework that keeps a pretrained VLA policy frozen, uses an external vision-language model (VLM) to infer the failure mode and recovery stage, and compiles a structured reward from task-relevant components. Rather than using the VLM to generate actions or rewards directly, ReCoVLA uses it as a semantic reward selector: it predicts a recovery descriptor and reward mask for in-simulation residual-policy training, followed by zero-shot sim-to-real deployment of the trained recovery policies. This decouples high-level failure understanding from low-level corrective control to support different VLAs. Experiments across short-horizon, long-horizon, and contact-rich manipulation tasks show that ReCoVLA outperforms the tested baselines on average. In simulation, our reward compiler improves average success from 36.7% for the fine-tuned $π_{0.5}$ baseline to 66.7%. In physical zero-shot sim-to-real experiments, ReCoVLA achieves the best average performance, with 61.7% success.",
            "link": "https://arxiv.org/abs/2606.09630v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09630v1",
            "published": "2026-06-08T15:29:09Z",
            "updated": "2026-06-08T15:29:09Z",
            "authors": [
              "Haodi Hu",
              "Chung-Ta Huang",
              "Jing Liu",
              "Ye Wang",
              "Kei Suzuki",
              "Matthew Brand",
              "Toshiaki Koike-Akino"
            ],
            "categories": [
              "cs.AI",
              "cs.LG",
              "cs.RO"
            ],
            "score": 82,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 85,
              "novelty": 82,
              "impact": 80,
              "practicality": 75,
              "coreAlignment": 86
            },
            "oneSentenceSummary": "VLM引导奖励编译实现VLA策略的失败恢复。",
            "summaryCn": "提出ReCoVLA，冻结预训练VLA，用外部VLM推断失败模式，编译任务相关奖励用于残差策略训练，零样本仿真到真实迁移。解耦高层失败理解与低层校正控制。",
            "whyImportant": "用VLM编译奖励，实现通用失败恢复，不修改VLA模型。",
            "reasonTags": [
              "失败恢复",
              "VLM",
              "奖励编译"
            ],
            "innovationPoints": [
              "VLM作为语义奖励选择器指导残差策略训练",
              "仿真到真实零样本迁移恢复策略"
            ],
            "noveltyVerdict": "利用VLM的语义理解规划恢复，无需修改原VLA。",
            "duplicateRisk": "medium",
            "dedupeNote": "不同于内嵌恢复模块，采用外部VLM生成恢复奖励。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies"
            ]
          },
          {
            "id": "2606.09258v1",
            "title": "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection",
            "summary": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences.",
            "summaryRaw": "Vision-language-action (VLA) policies can deviate from nominal trajectories during manipulation, even when tasks remain physically feasible. Recovering from these deviations is challenging, as they push the policy into unfamiliar state spaces where direct re-planning frequently destabilizes action sequences. We propose Back to the Familiar Future (B2FF), a recovery framework for foresight-driven VLAs that leverages future visual conditioning as a recovery interface. Before execution, the VLA generates a milestone bank of familiar future states conditioned on the clean initial observation. At recovery time, a recoverability-aware selector selects a recovery milestone from this bank and enforces it as a fixed visual goal. This enables the VLA to robustly map off-trajectory observations back to a familiar future. On failure-injected LIBERO, under controlled recovery timing aligned with the injected failure, B2FF increases the average success rate of a baseline VLA from 56.3% to 74.0%, demonstrating that pre-imagined milestones can guide recovery without fine-tuning the low-level action generator.",
            "link": "https://arxiv.org/abs/2606.09258v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09258v1",
            "published": "2026-06-08T09:30:38Z",
            "updated": "2026-06-08T09:30:38Z",
            "authors": [
              "Suyeon Shin",
              "Juwon Kim",
              "Hyeonbin Park",
              "Hyunseo Kim",
              "Hyundo Lee",
              "Hyung-Sin Kim",
              "Byoung-Tak Zhang"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 80,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 83,
              "novelty": 78,
              "impact": 72,
              "practicality": 75,
              "coreAlignment": 84
            },
            "oneSentenceSummary": "通过预想象里程碑选择实现VLA策略失败恢复。",
            "summaryCn": "提出B2FF，在干净初始观察条件生成熟悉未来状态里程碑库，恢复时用可恢复性感知选择器选取里程碑作为固定视觉目标，将脱轨观测映射回熟悉未来。",
            "whyImportant": "利用未来视觉条件化实现VLA策略的可靠失败恢复。",
            "reasonTags": [
              "失败恢复",
              "视觉里程碑",
              "VLA"
            ],
            "innovationPoints": [
              "预想象熟悉未来状态作为恢复界面",
              "可恢复性选择器确保有效里程碑"
            ],
            "noveltyVerdict": "创新地使用预生成视觉目标引导故障恢复。",
            "duplicateRisk": "medium",
            "dedupeNote": "与ReCoVLA不同，B2FF依赖VLA自身的未来视觉想象。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Back to the Familiar Future: Failure Recovery for VLA Policies via Pre-Imagined Milestone Selection"
            ]
          },
          {
            "id": "2606.08992v1",
            "title": "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning",
            "summary": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on…",
            "summaryRaw": "Vision-and-Language Navigation in continuous environments requires agents to understand the spatial structure of previously unseen environments in order to follow language instructions. Although foundation models have opened a promising path toward zero-shot navigation without task-specific policy training, many navigators still rely on local visual cues and linear history-based reasoning, overlooking the spatial nature of navigation across explored regions, traversed paths, landmarks, and their spatial relations. In this paper, we propose SpaceVLN, a navigation agent built around Spatial Cognitive Memory and Task-Guided Spatial Reasoning. Specifically, SpaceVLN introduces an efficient stagewise closed-loop framework where planning and execution are organized around verifiable space--landmark stages. During navigation, the agent progressively abstracts explored regions into Spatial Waypoints and dynamically maintains subtask-grounded landmark evidence, forming a hierarchical Spatial Cognitive Memory for progress localization and spatial-relation understanding. Built on this memory, Spatial-CoT integrates task-progress reasoning with spatial perception, analysis, and prediction, enabling Task-Guided Spatial Reasoning for embodied navigation. The unified stage interface enables SpaceVLN to address both Vision-and-Language Navigation and Object-Goal Navigation under a unified zero-shot setting, without task-specific policy training. Across R2R-CE, RxR-CE, GN-Bench, and HM3D-OVON, SpaceVLN achieves state-of-the-art zero-shot performance, and real-robot deployment further validates its applicability. These results highlight Spatial Cognitive Memory and Task-Guided Spatial Reasoning as a practical foundation for stronger embodied navigation agents.",
            "link": "https://arxiv.org/abs/2606.08992v1",
            "pdfLink": "https://arxiv.org/pdf/2606.08992v1",
            "published": "2026-06-08T03:42:08Z",
            "updated": "2026-06-08T03:42:08Z",
            "authors": [
              "Yucheng Deng",
              "Pingrui Lai",
              "Xinhai Li",
              "Chenjia Bai",
              "Xiaoheng Deng",
              "Chengnuo Sun",
              "Xuelong Li",
              "Hua Yang"
            ],
            "categories": [
              "cs.AI",
              "cs.CV",
              "cs.RO"
            ],
            "score": 78,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 75,
              "novelty": 80,
              "impact": 82,
              "practicality": 80,
              "coreAlignment": 70
            },
            "oneSentenceSummary": "零样本视觉-语言导航代理，具有在线空间认知记忆与推理。",
            "summaryCn": "提出SpaceVLN，围绕空间认知记忆和任务引导空间推理，采用阶段式闭环框架，将规划与执行组织到可验证的空间地标阶段。渐进构建空间路点图，实现高效零样本导航。",
            "whyImportant": "在连续环境中实现零样本语言导航，提升空间推理能力。",
            "reasonTags": [
              "视觉语言导航",
              "空间推理",
              "零样本"
            ],
            "innovationPoints": [
              "空间认知记忆抽象探索区域为路点",
              "任务引导的空间推理规划",
              "阶段式闭环框架验证规划"
            ],
            "noveltyVerdict": "将空间记忆与推理融入VLN，提升复杂环境导航。",
            "duplicateRisk": "low",
            "dedupeNote": "专注导航的空间认知模型，不同于操作VLA。",
            "retrievalGroups": [
              "category",
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "SpaceVLN: A Zero-Shot Vision-and-Language Navigation Agent with Online Spatial Cognitive Memory and Reasoning"
            ]
          }
        ],
        "wam": [
          {
            "id": "2606.09215v1",
            "title": "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation",
            "summary": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a h…",
            "summaryRaw": "World Action Models (WAMs) couple a video dynamics prior to the policy and have shown encouraging results on tabletop manipulation, but iterative denoising over high-dimensional video-action latents leaves them too slow for real-time humanoid loco-manipulation. The problem is compounded by the dominant hierarchical paradigm, in which a high-level manipulation policy controls only the upper body while a low-level controller tracks coarse base commands -- placing upper and lower body in inconsistent action spaces and reducing the legs to balance-preserving locomotion. We present MotionWAM, a real-time WAM that drives autonomous humanoid loco-manipulation from a single egocentric camera by conditioning the policy on the intermediate denoising features of a video world model. MotionWAM replaces the upper-lower split with a unified motion latent and predicts whole-body motion tokens that jointly cover locomotion, torso motion, height regulation, foot interaction, and hand manipulation in a single action space. A three-stage learning framework progressively adapts the video world model to egocentric visual dynamics and to the target humanoid embodiment. On nine real-world Unitree G1 tasks, MotionWAM runs in real time, substantially outperforms Vision-Language-Action (VLA) baselines fine-tuned on the same demonstrations by over 30% in overall success rate, and executes task-driven foot interaction that decoupled upper-lower policies cannot reach. Our results suggest that video-pretrained WAMs can be lifted from tabletop manipulation to coordinated, human-like whole-body humanoid control.",
            "link": "https://arxiv.org/abs/2606.09215v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09215v1",
            "published": "2026-06-08T08:50:14Z",
            "updated": "2026-06-08T08:50:14Z",
            "authors": [
              "Jia Zheng",
              "Teli Ma",
              "Yudong Fan",
              "Zifan Wang",
              "Shuo Yang",
              "Junwei Liang"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 95,
            "importanceLevel": "S",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 92,
              "novelty": 90,
              "impact": 88,
              "practicality": 80,
              "coreAlignment": 94
            },
            "oneSentenceSummary": "实时世界动作模型驱动人形机器人全身移动操作。",
            "summaryCn": "提出MotionWAM，从单目相机实时驱动人形移动操作。用统一运动潜变量取代上下半身分割，预测全身运动token，并利用视频世界模型的中间去噪特征条件化策略，实现实时性。",
            "whyImportant": "首次实现实时世界动作模型用于人形机器人，提升全身协调。",
            "reasonTags": [
              "世界动作模型",
              "人形机器人",
              "实时控制"
            ],
            "innovationPoints": [
              "实时WAM通过统一运动潜变量实现全身协调",
              "条件化策略于去噪特征，避免高维扩散延迟",
              "端到端单目驱动移动操作"
            ],
            "noveltyVerdict": "突破WAM实时性瓶颈，针对高自由度人形机器人。",
            "duplicateRisk": "low",
            "dedupeNote": "专注人形全身移动操作，不同于桌面操作WAM。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation"
            ]
          },
          {
            "id": "2606.08962v1",
            "title": "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache",
            "summary": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive.",
            "summaryRaw": "World Action Models (WAMs) generalize better than standard Vision-Language-Action (VLA) policies to novel motions and environments, because a video-modeling objective lets them learn from abundant unlabeled video rather than scarce labeled robot demonstrations. This generalization is computationally expensive. To complete a task, a WAM runs over multiple inference chunks, and each chunk requires a costly denoising process. Existing acceleration methods reduce this cost by caching and reusing computation within a single chunk's denoising trajectory. Our empirical analysis reveals a substantial source of redundancy they overlook: redundancy across chunks. When a robot executes a smooth behavior, the residuals computed at a given denoising step are strongly correlated from one chunk to the next. We introduce C$^3$ache, a training-free method that caches and reuses these residuals across inference chunks at the same denoising step. Experiments on benchmarks with a Fast-WAM backbone show that C$^3$ache achieves up to a $2.5\\times$ speedup in total wall-clock inference time, with negligible degradation in task success rate.",
            "link": "https://arxiv.org/abs/2606.08962v1",
            "pdfLink": "https://arxiv.org/pdf/2606.08962v1",
            "published": "2026-06-08T03:01:10Z",
            "updated": "2026-06-08T03:01:10Z",
            "authors": [
              "Weisen Zhao",
              "Lam Nguyen",
              "Zhicong Lu",
              "Yuzhang Shang"
            ],
            "categories": [
              "cs.CV",
              "cs.LG",
              "cs.RO"
            ],
            "score": 82,
            "importanceLevel": "A",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 85,
              "novelty": 85,
              "impact": 78,
              "practicality": 88,
              "coreAlignment": 86
            },
            "oneSentenceSummary": "跨推理块缓存加速世界动作模型推理。",
            "summaryCn": "提出C3ache，利用世界动作模型多推理块之间的残差相关性，缓存并复用跨块残差，无需训练即可加速推理，弥补现有方法只重用单块内去噪计算的不足。",
            "whyImportant": "首次利用跨块冗余加速WAM，提高实时性。",
            "reasonTags": [
              "推理加速",
              "世界动作模型",
              "跨块缓存"
            ],
            "innovationPoints": [
              "发现并利用跨块残差相关性实现缓存",
              "训练-free方法，即插即用"
            ],
            "noveltyVerdict": "新颖的跨块缓存策略，显著降低WAM延迟。",
            "duplicateRisk": "low",
            "dedupeNote": "不同于单块内缓存加速，开创跨块冗余利用。",
            "retrievalGroups": [
              "category",
              "robotics",
              "vla_core",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "C$^3$ache: Accelerating World Action Models with Cross Inference Chunk Cache"
            ]
          },
          {
            "id": "2606.09457v1",
            "title": "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models",
            "summary": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting.",
            "summaryRaw": "Embodied policies typically map current observations directly to actions, leaving candidate-action consequences implicit. World models provide predictive supervision, representations, or external simulation, but rarely let a policy inspect the imagined consequence of its own proposal before acting. We introduce $ω$-EVA, a latent interactive world model that realizes an Envision--Verify--Act loop for embodied action generation. Its three-stage framework learns action-conditioned latent dynamics, trains a language-conditioned flow policy on dynamics-aware visual representations, and feeds the policy's proposal back through the world model. A tri-branch refiner jointly reasons over the current state, proposal-conditioned future, and proposed action to produce the final action chunk. Because consequence reasoning remains in latent feature space, $ω$-EVA avoids generating future videos at inference. Evaluations across diverse single-arm, bimanual, long-horizon, and perturbed simulation settings show that the complete interaction pipeline consistently improves the proposal policy, while latent diagnostics indicate meaningful action-conditioned future structure. With approximately 1.2B parameters and no additional robot-data pretraining, $ω$-EVA demonstrates a compact and competitive performance--scale--data trade-off, making the world model an active action-feedback module rather than a passive predictor.",
            "link": "https://arxiv.org/abs/2606.09457v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09457v1",
            "published": "2026-06-08T13:12:56Z",
            "updated": "2026-06-08T13:12:56Z",
            "authors": [
              "Zhenguo Sun",
              "Yu Sun",
              "Hande Huang",
              "Alois Knoll"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 78,
            "importanceLevel": "A",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 82,
              "novelty": 80,
              "impact": 72,
              "practicality": 70,
              "coreAlignment": 80
            },
            "oneSentenceSummary": "潜在交互世界模型实现设想-验证-行动循环。",
            "summaryCn": "提出ω-EVA，学习动作条件潜在动态，训练语言条件流策略，将策略提案反馈通过世界模型，由三分支精炼器联合推理当前状态、提案未来和动作，产生最终动作块。",
            "whyImportant": "实现内在设想验证，提升动作生成的可靠性和一致性。",
            "reasonTags": [
              "交互世界模型",
              "设想-验证-行动",
              "潜在动态"
            ],
            "innovationPoints": [
              "设想-验证-行动闭环避免生成未来视频",
              "潜在空间一致性推理"
            ],
            "noveltyVerdict": "将世界模型用于内部动作验证，提升决策质量。",
            "duplicateRisk": "medium",
            "dedupeNote": "区别于生成完整视频的WAM，在潜在空间验证。",
            "retrievalGroups": [
              "category",
              "robotics",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "$ω$-EVA: Envision, Verify, and Act with Latent Interactive World Models"
            ]
          },
          {
            "id": "2606.09507v1",
            "title": "Prisma-World: Camera-Controllable Multi-Agent Video World Model",
            "summary": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of…",
            "summaryRaw": "Video world models have made rapid progress in generating controllable visual experiences, but most of them still simulate the world from a single observer. Extending such models to multiple agents raises a central challenge: if each agent's future state is generated independently, overlapping views may instantiate different versions of the same scene, leading to inconsistent objects, layouts, and appearances across agents. Conventional camera conditioning controls individual trajectories, but it does not explicitly couple the generation of views that should agree under shared scene geometry. We introduce Prisma-World, a camera-controllable multi-agent world model that formulates multi-agent generation as a joint geometry-aware denoising process for cross-view consistency. Prisma-World processes all agent videos within one full-attention sequence, uses a multi-agent RoPE design to distinguish agent identities while preserving synchronized temporal coordinates, and injects relative camera geometry into attention to bias overlapping viewpoints toward shared scene evidence. To further strengthen multi-view consistency and enhance global spatial perception, we augment our framework with an overlap-decaying curriculum training paradigm alongside minimap-conditioned structural guidance. To facilitate the training and evaluation of multi-agent models, we introduce PrismaDataset, a large-scale UE5 dataset with panoramic acquisition across diverse scenes, composable multi-agent view groups with flexible agent counts and complex camera trajectories, and precise camera/action annotations for consistency training and evaluation. Experiments show that a single Prisma-World model can generate high-fidelity multi-agent videos with flexible agent numbers, camera controllability, improved cross-view consistency, and spatial grounding under minimap guidance.",
            "link": "https://arxiv.org/abs/2606.09507v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09507v1",
            "published": "2026-06-08T13:59:50Z",
            "updated": "2026-06-08T13:59:50Z",
            "authors": [
              "Huiqiang Sun",
              "Zhan Peng",
              "Size Wu",
              "Kun Wang",
              "Kang Liao",
              "Dianyi Wang",
              "Xingyu Zeng",
              "Sheng Jin"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 70,
            "importanceLevel": "B",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 70,
              "novelty": 85,
              "impact": 65,
              "practicality": 60,
              "coreAlignment": 70
            },
            "oneSentenceSummary": "相机可控多智能体视频世界模型，保证跨视图一致性。",
            "summaryCn": "提出Prisma-World，通过联合几何感知去噪过程生成多智能体视频，使用多智能体RoPE区分视角，保证重叠区域场景对象一致，支持可控相机运动的多智能体视觉模拟。",
            "whyImportant": "实现多智能体3D一致世界模拟，可用于协同场景生成。",
            "reasonTags": [
              "多智能体",
              "视频世界模型",
              "跨视图一致"
            ],
            "innovationPoints": [
              "联合去噪保证几何一致性",
              "多智能体RoPE视角编码",
              "相机可控"
            ],
            "noveltyVerdict": "首次将几何一致性引入多智能体视频生成世界模型。",
            "duplicateRisk": "low",
            "dedupeNote": "专注多智能体一致性，区别于单视图世界模型。",
            "retrievalGroups": [
              "category",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Prisma-World: Camera-Controllable Multi-Agent Video World Model"
            ]
          },
          {
            "id": "2606.09499v1",
            "title": "Targeting World Models to Compromise Robot Learning Pipelines",
            "summary": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models i…",
            "summaryRaw": "World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating robot training data or simulating real world environments, with many works proposing their integration into the robot learning pipeline. While highly practical, in this work we demonstrate that world models introduce a uniquely stealthy and effective data poisoning entry point into the robot learning supply chain that can result in the deployment of unsafe or otherwise compromised robotic policies despite training on seemingly safe ground truth training data. In contrast to traditional data poisoning techniques which directly implant dangerous trajectories into sold or uploaded datasets, our novel attack methods inject malicious prompts or compromising transition dynamics into visibly safe teleoperated datasets which are only activated once fed through a world model as input. This can result in the generation of synthetic, dangerous robot training trajectories and subsequently unsafe or compromised robot policies. We demonstrate the effectiveness of our attacks against both state of the art action conditioned and text conditioned world models, showing a full end-to-end backdoor on a downstream DRL policy and a proof-of-concept for the VLA setting. Overall these findings necessitate research into more secure world models and reevaluating their position within the robot learning supply chain.",
            "link": "https://arxiv.org/abs/2606.09499v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09499v1",
            "published": "2026-06-08T13:50:31Z",
            "updated": "2026-06-08T13:50:31Z",
            "authors": [
              "Ethan Rathbun",
              "Ahmed Agha",
              "Saaduddin Mahmud",
              "Christopher Amato",
              "Alina Oprea",
              "Eugene Bagdasarian"
            ],
            "categories": [
              "cs.AI",
              "cs.RO"
            ],
            "score": 72,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 47,
              "novelty": 12,
              "impact": 9,
              "practicality": 13,
              "coreAlignment": 25
            },
            "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：World models have recently seen a rapid growth in both their popularity and capability as more data efficient tools for generating…",
            "whyImportant": "命中VLA、WAM、机器人、新基准主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "机器人",
              "新基准"
            ],
            "innovationPoints": [
              "包含新基准或新数据评测"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [
              "category",
              "robotics",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Targeting World Models to Compromise Robot Learning Pipelines"
            ]
          },
          {
            "id": "2606.09312v1",
            "title": "Toward Compiler World Models: Learning Latent Dynamics for Efficient Tensor Program Search",
            "summary": "Tensor program optimization is essential for modern machine learning systems, but its search space is enormous. Existing auto-schedulers reduce measurement cost with learned cost models, yet they usually evaluate each candidate as a static code snapshot, ignoring the schedule trajectory that produced it.",
            "summaryRaw": "Tensor program optimization is essential for modern machine learning systems, but its search space is enormous. Existing auto-schedulers reduce measurement cost with learned cost models, yet they usually evaluate each candidate as a static code snapshot, ignoring the schedule trajectory that produced it. This makes them insensitive to action dependencies and vulnerable to superficial code variations. We propose a \\emph{world-model-inspired} evaluator that models schedule evaluation as action-conditioned latent dynamics over program states. Starting from the initial program, it rolls out scheduling actions in a continuous latent space with a lightweight transition model, avoiding expensive AST mutation and repeated code encoding. The final dynamic representation is combined with action and hardware features to rank candidates. Implemented in TVM AutoScheduler, our method improves representative-subgraph latency over Ansor by 1.37$\\times$ on GPU and 1.54$\\times$ on CPU under the same 64-trial budget. It also matches Ansor-10K within 2.2% geometric mean using 10$\\times$ fewer measurements, and accelerates full-model inference over PyTorch/PyTorch-opt(cuDNN) by 4.61$\\times$/3.67$\\times$ geometric mean.",
            "link": "https://arxiv.org/abs/2606.09312v1",
            "pdfLink": "https://arxiv.org/pdf/2606.09312v1",
            "published": "2026-06-08T10:17:27Z",
            "updated": "2026-06-08T10:17:27Z",
            "authors": [
              "Haolin Pan",
              "Lianghong Huang",
              "Xvlin Zhou",
              "Mingjie Xing",
              "Yanjun Wu"
            ],
            "categories": [
              "cs.LG"
            ],
            "score": 51,
            "importanceLevel": "A",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 30,
              "novelty": 7,
              "impact": 5,
              "practicality": 11,
              "coreAlignment": 16
            },
            "oneSentenceSummary": "该论文是偏WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Tensor program optimization is essential for modern machine learning systems, but its search space is enormous.",
            "whyImportant": "命中WAM、新基准主题，分类覆盖cs.LG，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "WAM",
              "新基准"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在WAM方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [
              "category",
              "wam_core"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Toward Compiler World Models: Learning Latent Dynamics for Efficient Tensor Program Search"
            ]
          }
        ]
      },
      "dailyBrief": {
        "overall": "今日亮点：高效VLA模型CT-VAM与SyVLA提升泛化；MotionWAM实现人形实时WAM；C3ache加速WAM推理；多篇VLA失败恢复新方法；灵巧操作提升等。",
        "vla": "VLA进展：CT-VAM生物启发解耦、SyVLA多样化经验训练、TORL-VLA触觉在线RL、ReCoVLA与B2FF失败恢复、SpaceVLN空间导航。",
        "wam": "WAM进展：MotionWAM人形实时控制、C3ache跨块缓存加速、ω-EVA设想-验证-行动闭环、Prisma-World多智能体一致性。",
        "retrieval": "从44篇候选论文中精选16篇核心VLA/WAM/机器人论文。"
      }
    },
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-03T15:46:57.469674+00:00",
      "paperCount": 10,
      "papers": [
        {
          "id": "2606.03392v1",
          "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
          "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA).",
          "summaryRaw": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy. OpenEAI-VLA builds on Qwen3-VL-4B and uses a Diffusion Transformer action head, and is trained in two stages with only open-source robot and multimodal datasets. Across four real-world manipulation tasks, OpenEAI-Arm outperforms two commercial 6+1-dof arms under the same policy, and OpenEAI-VLA achieves success rates comparable to the large-scale pretrained pi0 baseline with only limited pretraining data. We will release the full hardware designs, drivers, models, and training/data pipelines to support reproducible research and scalable data collection. Our codes, layouts, and models will be released after the paper is accepted.",
          "link": "https://arxiv.org/abs/2606.03392v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03392v1",
          "published": "2026-06-02T09:34:08Z",
          "updated": "2026-06-02T09:34:08Z",
          "authors": [
            "Jinyuan Zhang",
            "Luoyi Fan",
            "Leiyu Wang",
            "Yeqiang Wang",
            "Yicheng Zhu",
            "Cewu Lu",
            "Nanyang Ye"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 85,
          "importanceLevel": "A",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 90,
            "novelty": 20,
            "impact": 80,
            "practicality": 95,
            "coreAlignment": 95
          },
          "oneSentenceSummary": "开源具身智能平台，集成低成本机械臂与VLA模型",
          "summaryCn": "OpenEAI-Platform提供开源6+1自由度机械臂与基于Qwen3-VL-4B的VLA模型，仅用开源数据训练，实际任务成功率可比肩大规模预训练基准pi0。",
          "whyImportant": "开源平台降低具身AI门槛，促进VLA社区发展。",
          "reasonTags": [
            "开源平台",
            "低成本机械臂",
            "VLA模型"
          ],
          "innovationPoints": [
            "低成本硬件设计",
            "两阶段训练VLA模型",
            "全开源生态"
          ],
          "noveltyVerdict": "工程集成创新，新颖度较低",
          "duplicateRisk": "low",
          "dedupeNote": "提供硬件-软件统一平台，与其他VLA方法互补",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform"
          ]
        },
        {
          "id": "2606.03784v1",
          "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
          "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale.",
          "summaryRaw": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data. Through extensive experiments, we find that effective embodied CoT should ground high-level semantic understanding into concrete action guidance, such as end-effector movement descriptions and image-space trajectories, while high-level reasoning alone brings only marginal gains. We further show that explicit CoT does not scale reliably when used as an autoregressive action prefix, as it suffers from compounding inference errors and unstable reasoning-action coupling. To address these limitations, we propose ERVLA, a VLA model that uses embodied CoT as representation-shaping supervision rather than mandatory test-time reasoning. ERVLA is trained with a reasoning-dropout strategy, enabling the model to absorb rich reasoning traces during training while predicting actions directly without CoT decoding during inference. This design improves scalability with increasing pre-training data and avoids autoregressive instability. ERVLA achieves state-of-the-art performance on LIBERO-Plus with an 86.9% success rate and reaches 53.2% success rate on VLABench, demonstrating strong out-of-distribution generalization. In real-robot experiments, ERVLA further outperforms competitive state-of-the-art baselines, especially on tasks requiring semantic disambiguation and long-horizon execution. Code, data, and model checkpoints will be released.",
          "link": "https://arxiv.org/abs/2606.03784v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03784v1",
          "published": "2026-06-02T15:37:59Z",
          "updated": "2026-06-02T15:37:59Z",
          "authors": [
            "Nan Sun",
            "Yuan Zhang",
            "Yongkun Yang",
            "Wentao Zhao",
            "Peiyan Li",
            "Jun Guo",
            "Wenxuan Song",
            "Pengxiang Ding"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 88,
          "importanceLevel": "A",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 95,
            "novelty": 40,
            "impact": 75,
            "practicality": 60,
            "coreAlignment": 95
          },
          "oneSentenceSummary": "构建大规模具身CoT数据集，提出并行预测新范式",
          "summaryCn": "构建含97.8万轨迹的具身CoT语料库，发现CoT应落地为动作引导，提出将CoT作为并行预测的新范式，解决自回归耦合误差问题。",
          "whyImportant": "重新审视具身CoT，大规模实验指导VLA推理设计。",
          "reasonTags": [
            "具身CoT",
            "大规模数据集",
            "并行预测"
          ],
          "innovationPoints": [
            "最大具身CoT数据集",
            "发现CoT应提供动作引导",
            "并行预测取代自回归前缀"
          ],
          "noveltyVerdict": "实验洞察具有创新性，方法有效",
          "duplicateRisk": "low",
          "dedupeNote": "聚焦CoT策略，与通用VLA方法不同",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation"
          ]
        },
        {
          "id": "2606.03943v1",
          "title": "PointAction: 3D Points as Universal Action Representations for Robot Control",
          "summary": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified,…",
          "summaryRaw": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified, making action grounding ambiguous. Meanwhile, scaling action supervision across diverse tasks and embodiments remains costly. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling. PointAction fine-tunes a foundation video generation model to jointly predict future RGB frames and dynamic 3D pointmaps, producing temporally consistent 3D motion of task-relevant scene geometry. These point dynamics serve as a structured, embodiment-agnostic action interface, which a diffusion-based action decoder maps to executable robot actions. By using metric 3D point dynamics as the interface between video prediction and control, PointAction reduces the ambiguity of RGB-only action grounding and supports transfer across tasks and embodiments with limited action supervision. Experiments show that PointAction achieves state-of-the-art 4D generation quality on robot scenes, outperforms existing baselines in simulation, and generalizes to two real robot arms unseen during pretraining.",
          "link": "https://arxiv.org/abs/2606.03943v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03943v1",
          "published": "2026-06-02T17:30:50Z",
          "updated": "2026-06-02T17:30:50Z",
          "authors": [
            "Mutian Tong",
            "Han Jiang",
            "Qiao Feng",
            "Lingjie Liu",
            "Jiatao Gu"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 85,
          "importanceLevel": "A",
          "lane": "WAM",
          "dimensionScores": {
            "relevance": 90,
            "novelty": 80,
            "impact": 70,
            "practicality": 60,
            "coreAlignment": 95
          },
          "oneSentenceSummary": "用3D点轨迹作为通用动作接口衔接视频预测与机器人控制",
          "summaryCn": "PointAction微调基础视频生成模型，联合预测RGB帧和3D点云，将点动态作为具身无关动作表示，实现视频预测到动作的桥梁。",
          "whyImportant": "首次用3D点云作为VAM与动作策略的纽带，解决动作模糊性。",
          "reasonTags": [
            "视频动作模型",
            "3D点云",
            "动作表示"
          ],
          "innovationPoints": [
            "联合预测RGB和3D点云",
            "点动态作为通用动作接口",
            "微调视频基础模型"
          ],
          "noveltyVerdict": "新颖的4D点表示，创新性强",
          "duplicateRisk": "medium",
          "dedupeNote": "独特使用3D点云作为中间表示，区别于直接动作预测",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "PointAction: 3D Points as Universal Action Representations for Robot Control"
          ]
        },
        {
          "id": "2606.03868v1",
          "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
          "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective.",
          "summaryRaw": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions. In contrast, we keep the distribution broader by modeling the joint space of interaction videos and executable hand trajectories under multiple conditioning regimes. We propose Donk, a unified video-action denoising model for dexterous hands. With language, an initial image, and the initial hand state, Donk samples future videos and bimanual MANO trajectories as an action policy. Without the image condition, the same denoising architecture samples paired video-action rollouts from a text-conditioned distribution, turning the aligned video prior into a data engine. Across action, video, and text-only generation evaluations, Donk improves dexterous trajectory accuracy, preserves strong video fidelity, and produces smooth text-conditioned action rollouts under the same unified training recipe.",
          "link": "https://arxiv.org/abs/2606.03868v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03868v1",
          "published": "2026-06-02T16:39:23Z",
          "updated": "2026-06-02T16:39:23Z",
          "authors": [
            "Dingrui Wang",
            "YuAn Wang",
            "Jinkun Liu",
            "Yue Zhang",
            "Mattia Piccinini",
            "Yu Sun",
            "Johannes Betz"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 78,
          "importanceLevel": "A",
          "lane": "WAM",
          "dimensionScores": {
            "relevance": 90,
            "novelty": 80,
            "impact": 60,
            "practicality": 50,
            "coreAlignment": 95
          },
          "oneSentenceSummary": "统一视频-动作去噪模型，用于灵巧手动作生成与数据扩增",
          "summaryCn": "Donk在潜在空间中联合去噪交互视频与可执行手动轨迹，可作为策略直接生成动作，也可作为数据引擎生成配对数据。",
          "whyImportant": "统一去噪框架，兼具策略与数据引擎双重功能。",
          "reasonTags": [
            "视频动作去噪",
            "灵巧手",
            "数据生成"
          ],
          "innovationPoints": [
            "联合视频-动作去噪",
            "多条件采样",
            "生成式数据引擎"
          ],
          "noveltyVerdict": "统一去噪范式新颖，功能多样",
          "duplicateRisk": "medium",
          "dedupeNote": "同时考虑视频与动作的联合分布，区别于单一模态模型",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation"
          ]
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guida…",
          "summaryRaw": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from interaction? We address this question with TTT-VLA, a test-time training framework based on Latent Prompt Optimization (LPO). During training, the latent prompt is learned with an additional proxy task, providing an extra learned conditioning signal for policy learning. At test time, TTT is performed by collecting interaction data from the current environment and optimizing only the latent prompt on those data using the proxy task's self-supervised signal, without modifying the policy itself. Experiments on SimplerEnv demonstrate that the proposed method consistently improves task success rates in both single- and multi-embodiment settings. Further analysis shows that the gains arise primarily from correcting a small number of critical decisions rather than globally altering policy behavior. These results suggest that LPO provides an effective and practical pathway for deployment-time improvement of foundation manipulation policies.",
          "link": "https://arxiv.org/abs/2606.03127v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03127v1",
          "published": "2026-06-02T04:10:39Z",
          "updated": "2026-06-02T04:10:39Z",
          "authors": [
            "Wenbo Zhang",
            "Jianxiong Li",
            "Shuai Yang",
            "Sijin Chen",
            "Jiajun Liu",
            "Lingqiao Liu",
            "Xiao Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 80,
          "importanceLevel": "A",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 80,
            "novelty": 60,
            "impact": 65,
            "practicality": 70,
            "coreAlignment": 90
          },
          "oneSentenceSummary": "测试时通过潜在提示优化实现VLA自适应",
          "summaryCn": "TTT-VLA在训练时学习潜在提示作为额外条件，测试时仅优化提示参数以适应分布变化，无需更新整个模型。",
          "whyImportant": "首次将测试时训练用于VLA，提升部署鲁棒性。",
          "reasonTags": [
            "测试时训练",
            "潜在提示优化",
            "自适应"
          ],
          "innovationPoints": [
            "提出潜在提示优化训练",
            "测试时仅优化提示进行适应",
            "不修改模型权重"
          ],
          "noveltyVerdict": "新颖的测试时适应方法，有创新性",
          "duplicateRisk": "low",
          "dedupeNote": "专注于部署适应，与其他VLA训练方法正交",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models"
          ]
        },
        {
          "id": "2606.03682v1",
          "title": "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation",
          "summary": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities.",
          "summaryRaw": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities. To address this, we curate diverse 3D scenes and develop an automated pipeline for large-scale navigation data, resulting in the GN-Matrix dataset. Building on a 3D Gaussian Splatting (3DGS) engine, we introduce a high-fidelity simulation platform supporting interactive roaming and collision-aware navigation. We further propose GN-Bench, the first BEV-based benchmark incorporating dynamic 3DGS avatars for human-robot interaction evaluation. To leverage the simulator, we develop an RL-driven navigation foundation model, Break and Establish (BAE). After supervised learning, DAgger exposes the model to rollout-induced states, breaking narrow expert-centric distributions and enabling downstream RL exploration. This unified VLN paradigm integrates map-based and map-free tasks, including instruction following, human following, and goal navigation. GN-BAE formalizes high-fidelity 3DGS-rendered Bird's Eye View representations as compact memory, unlocking latent spatial reasoning in VLMs. Extensive evaluations on GN-Bench and VLN-CE show that GN0 outperforms state-of-the-art VLN methods. Overall, GN-Matrix offers a unified framework spanning data, simulation, and learning, advancing embodied navigation in research and industrial applications.",
          "link": "https://arxiv.org/abs/2606.03682v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03682v1",
          "published": "2026-06-02T14:05:47Z",
          "updated": "2026-06-02T14:05:47Z",
          "authors": [
            "Xinhai Li",
            "Xiaotao Zhang",
            "Yuehao Huang",
            "Jiankun Dong",
            "Tianhang Wang",
            "Sunyao Zhou",
            "Yunzi Wu",
            "Chengnuo Sun"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 82,
          "importanceLevel": "A",
          "lane": "Both",
          "dimensionScores": {
            "relevance": 70,
            "novelty": 70,
            "impact": 70,
            "practicality": 60,
            "coreAlignment": 50
          },
          "oneSentenceSummary": "统一生成、评估、策略学习的视觉语言导航范式",
          "summaryCn": "利用3DGS引擎构建高保真模拟器，提出GN-Bench基准和Break-and-Establish导航基础模型，支持动态人机交互。",
          "whyImportant": "首个BEV基准及交互评估，推动VLN基础模型。",
          "reasonTags": [
            "视觉语言导航",
            "3DGS模拟",
            "基础模型"
          ],
          "innovationPoints": [
            "3DGS引擎高保真模拟",
            "BEV基准与动态虚拟人",
            "RL驱动的导航基础模型"
          ],
          "noveltyVerdict": "集成生成与评估，较为新颖",
          "duplicateRisk": "low",
          "dedupeNote": "专注于导航，与操作类VLA不同场景",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation"
          ]
        },
        {
          "id": "2606.03609v1",
          "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
          "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go.",
          "summaryRaw": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through. Those that do target geometry, such as bird's-eye-view occupancy grids, flatten the three-dimensional environment onto a ground plane, discarding the above-ground and multi-level structure that shapes real navigation. What is missing is a predictive target that captures the navigable geometry an agent actually traverses, without photometric entanglement and without collapsing the third dimension. Our key idea is to model the open volume between buildings, the negative space, encoded as a 3D isovist: a spherical visibility-depth map recording the distance to the nearest surface in every direction. We introduce an embodied world model that predicts the next isovist from a short history of past isovists and a movement action. The prediction is formulated as a depth residual so the decoder inherits sharp building edges, trained with self-rollout scheduled sampling to keep corrupted context on the geometry manifold, and equipped with a persistent latent bird's-eye-view spatial map for cross-path consistency. Our central finding is emergent and unexpected: a single city-blind model trained on Manhattan and Paris develops a cross-city spatial signature, with city identity linearly decodable from its temporal latents far above single-frame baselines, so the signature lives in the learned dynamics rather than in appearance. The representation is lightweight, interpretable, and reproducible, offering a geometric substrate for spatial reasoning in embodied AI, robotics, and urban analysis, released with an open dataset and pipeline.",
          "link": "https://arxiv.org/abs/2606.03609v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03609v1",
          "published": "2026-06-02T13:11:30Z",
          "updated": "2026-06-02T13:11:30Z",
          "authors": [
            "Xuhui Lin",
            "Stephen Law",
            "Nanjiang Chen",
            "Kunyao Li",
            "Tao Yang"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "score": 65,
          "importanceLevel": "B",
          "lane": "WAM",
          "dimensionScores": {
            "relevance": 60,
            "novelty": 50,
            "impact": 50,
            "practicality": 30,
            "coreAlignment": 60
          },
          "oneSentenceSummary": "用3D等视域图建模城市可导航空间，揭示跨城几何签名",
          "summaryCn": "提出3D等视域世界模型，记录建筑间开放空间的距离信息，避免外观依赖，捕获三维可导航几何结构。",
          "whyImportant": "为导航智能体提供不依赖外观的空间表示。",
          "reasonTags": [
            "世界模型",
            "等视域",
            "导航几何"
          ],
          "innovationPoints": [
            "3D等视域表示",
            "无光度纠缠",
            "跨城几何模式"
          ],
          "noveltyVerdict": "在导航空间表示上有创新，但作用有限",
          "duplicateRisk": "low",
          "dedupeNote": "独特的世界表示，不同于视觉预测型世界模型",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature"
          ]
        },
        {
          "id": "2606.03598v1",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors.",
          "summaryRaw": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories. It systematically under-samples brief but causally critical sub-skills, leading to phase starvation, and completely overlooks the varying degrees of forgetting across historical tasks. To overcome these limitations, we introduce PHASER, an architecture-agnostic continual learning framework. PHASER employs a phase-centric capacity allocation to guarantee equal memory support for all sub-skills, coupled with a multi-modal interference routing strategy that dynamically prioritizes historical phases at high risk of forgetting. Furthermore, to enable fully autonomous lifelong adaptation, we integrate Auto-PC, a lightweight pipeline combining unsupervised action-signal change-point detection with VLM-based semantic verification to extract temporal boundaries without intensive manual supervision. Evaluated across three VLA backbones on LIBERO continual learning suites, PHASER yields substantial empirical improvements, increasing Average Success Rate (ASR) by up to 31% over matched-budget ER and achieving an 87.8% final ASR on the LIBERO-Goal CL setting.",
          "link": "https://arxiv.org/abs/2606.03598v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03598v1",
          "published": "2026-06-02T13:04:15Z",
          "updated": "2026-06-02T13:04:15Z",
          "authors": [
            "Ziyang Chen",
            "Shaoguang Wang",
            "Weiyu Guo",
            "Qianyi Cai",
            "He Zhang",
            "Pengteng Li",
            "Yiren Zhao",
            "Yandong Guo"
          ],
          "categories": [
            "cs.AI",
            "cs.CV",
            "cs.RO"
          ],
          "score": 70,
          "importanceLevel": "B",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 85,
            "novelty": 30,
            "impact": 55,
            "practicality": 40,
            "coreAlignment": 85
          },
          "oneSentenceSummary": "面向VLA的持续学习框架，缓解灾难性遗忘",
          "summaryCn": "PHASER根据操作阶段分配记忆容量，结合语义重放，保证各子技能均衡训练，解决VLA持续学习中的遗忘问题。",
          "whyImportant": "解决VLA持续学习瓶颈，使模型能渐进掌握新技能。",
          "reasonTags": [
            "持续学习",
            "经验重放",
            "灾难性遗忘"
          ],
          "innovationPoints": [
            "阶段感知记忆分配",
            "语义重放策略"
          ],
          "noveltyVerdict": "在VLA持续学习场景中有针对性创新",
          "duplicateRisk": "medium",
          "dedupeNote": "专门针对VLA操作任务的分阶段特性设计",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models"
          ]
        },
        {
          "id": "2606.03240v1",
          "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
          "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning.",
          "summaryRaw": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) features for policy rollout. The robot's proprioceptive state queries the GEP feature grid, producing compact, phase-dependent geometry tokens for action prediction. GeoAlign achieves 99.0% on LIBERO, 85.3% across three SimplerEnv-Fractal tasks, and 78.8% on eight geometry-critical real-world ALOHA tasks, with ablations confirming the value of geometry post-training and proprioceptive-state-guided querying.",
          "link": "https://arxiv.org/abs/2606.03240v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03240v1",
          "published": "2026-06-02T07:01:18Z",
          "updated": "2026-06-02T07:01:18Z",
          "authors": [
            "Yizhi Chen",
            "Zhanxiang Cao",
            "Xinyi Peng",
            "Yixiao Zheng",
            "Xiaxi Si",
            "Yiheng Li",
            "Liyun Yan",
            "Keqi Zhu"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 60,
          "importanceLevel": "B",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 75,
            "novelty": 30,
            "impact": 45,
            "practicality": 40,
            "coreAlignment": 80
          },
          "oneSentenceSummary": "状态引导的空间对齐提升VLA几何推理",
          "summaryCn": "GeoAlign通过RGB-D后训练几何分支，以本体状态查询生成紧凑几何令牌，增强VLA对空间关系的理解。",
          "whyImportant": "补齐VLA空间推理短板，提升精度。",
          "reasonTags": [
            "空间对齐",
            "几何增强",
            "状态引导"
          ],
          "innovationPoints": [
            "RGB几何分支后训练",
            "状态引导的几何令牌"
          ],
          "noveltyVerdict": "针对VLA空间能力的改进，有一定创新",
          "duplicateRisk": "low",
          "dedupeNote": "独特地结合几何后训练与状态查询，与其他VLA方法互补",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models"
          ]
        },
        {
          "id": "2606.03724v1",
          "title": "Same Weights, Different Robot: A Deployment Safety View of VLA Policies",
          "summary": "Vision-language-action (VLA) policies are often treated as checkpoint-defined objects: if the weights, prompt, and benchmark suite match, the deployment is assumed to be the same policy. Robot execution breaks this assumption because the same normalized model output can become a different physical action after action unnormalization and…",
          "summaryRaw": "Vision-language-action (VLA) policies are often treated as checkpoint-defined objects: if the weights, prompt, and benchmark suite match, the deployment is assumed to be the same policy. Robot execution breaks this assumption because the same normalized model output can become a different physical action after action unnormalization and controller conventions are applied. This creates a deployment-safety gap: safety review can certify the checkpoint while missing the executable robot policy that reaches the controller. We formalize this gap as an executable policy specification problem: a VLA policy includes the learned model, action representation, metadata-selected unnormalizer, and controller-facing conventions. Under this view, identical checkpoints can be executable-inequivalent. For quantile-style action normalization, we derive a closed-form metadata mismatch transform and an ExecSpec certificate that measures action-space semantic drift without model inference or rollout. On LIBERO-Goal replay, substituting a plausible sibling metadata key yields mean drift 0.199 over six non-gripper action dimensions and reduces success from 28/28 to 2/28 under full substitution. On LIBERO-Spatial replay, the same substituted key reduces success from 26/26 to 0/26. The same full-substitution protocol gives 0/28 success for all four Object substitutions and 0/23 or 1/23 success on Long. Identity-key, replay-validity, no-op filtering, raw-vs-correct replay, mask/gripper, synthetic upper-bound, and OpenVLA-style unnormalizer interface checks rule out several simpler explanations. These results do not certify closed-loop or hardware safety. They support a narrower deployment-safety view: action-space metadata is part of the executable policy and should be checked before rollout.",
          "link": "https://arxiv.org/abs/2606.03724v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03724v1",
          "published": "2026-06-02T14:45:00Z",
          "updated": "2026-06-02T14:45:00Z",
          "authors": [
            "Jianwei Tai"
          ],
          "categories": [],
          "score": 55,
          "importanceLevel": "B",
          "lane": "VLA",
          "dimensionScores": {
            "relevance": 60,
            "novelty": 40,
            "impact": 30,
            "practicality": 50,
            "coreAlignment": 70
          },
          "oneSentenceSummary": "揭示VLA部署安全漏洞：同一权重因反归一化导致不同动作",
          "summaryCn": "指出VLA策略在部署时，由于动作反归一化和控制器约定，相同输入可产生不同物理动作，提出安全评估框架。",
          "whyImportant": "提醒安全性审视不能仅依赖权重检验，需考虑部署差异。",
          "reasonTags": [
            "部署安全",
            "动作反归一化",
            "策略等价性"
          ],
          "innovationPoints": [
            "提出可执行策略规范问题",
            "推导反归一化变换关系"
          ],
          "noveltyVerdict": "揭示一个重要但被忽视的安全问题，思路新颖",
          "duplicateRisk": "low",
          "dedupeNote": "聚焦VLA部署的安全视角，与其他方法不同",
          "retrievalGroups": [
            "robotics"
          ],
          "mergedCount": 1,
          "mergedTitles": [
            "Same Weights, Different Robot: A Deployment Safety View of VLA Policies"
          ]
        }
      ],
      "paperSets": {
        "overall": [
          {
            "id": "2606.03392v1",
            "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
            "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA).",
            "summaryRaw": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy. OpenEAI-VLA builds on Qwen3-VL-4B and uses a Diffusion Transformer action head, and is trained in two stages with only open-source robot and multimodal datasets. Across four real-world manipulation tasks, OpenEAI-Arm outperforms two commercial 6+1-dof arms under the same policy, and OpenEAI-VLA achieves success rates comparable to the large-scale pretrained pi0 baseline with only limited pretraining data. We will release the full hardware designs, drivers, models, and training/data pipelines to support reproducible research and scalable data collection. Our codes, layouts, and models will be released after the paper is accepted.",
            "link": "https://arxiv.org/abs/2606.03392v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03392v1",
            "published": "2026-06-02T09:34:08Z",
            "updated": "2026-06-02T09:34:08Z",
            "authors": [
              "Jinyuan Zhang",
              "Luoyi Fan",
              "Leiyu Wang",
              "Yeqiang Wang",
              "Yicheng Zhu",
              "Cewu Lu",
              "Nanyang Ye"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 85,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 20,
              "impact": 80,
              "practicality": 95,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "开源具身智能平台，集成低成本机械臂与VLA模型",
            "summaryCn": "OpenEAI-Platform提供开源6+1自由度机械臂与基于Qwen3-VL-4B的VLA模型，仅用开源数据训练，实际任务成功率可比肩大规模预训练基准pi0。",
            "whyImportant": "开源平台降低具身AI门槛，促进VLA社区发展。",
            "reasonTags": [
              "开源平台",
              "低成本机械臂",
              "VLA模型"
            ],
            "innovationPoints": [
              "低成本硬件设计",
              "两阶段训练VLA模型",
              "全开源生态"
            ],
            "noveltyVerdict": "工程集成创新，新颖度较低",
            "duplicateRisk": "low",
            "dedupeNote": "提供硬件-软件统一平台，与其他VLA方法互补",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform"
            ]
          },
          {
            "id": "2606.03784v1",
            "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
            "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale.",
            "summaryRaw": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data. Through extensive experiments, we find that effective embodied CoT should ground high-level semantic understanding into concrete action guidance, such as end-effector movement descriptions and image-space trajectories, while high-level reasoning alone brings only marginal gains. We further show that explicit CoT does not scale reliably when used as an autoregressive action prefix, as it suffers from compounding inference errors and unstable reasoning-action coupling. To address these limitations, we propose ERVLA, a VLA model that uses embodied CoT as representation-shaping supervision rather than mandatory test-time reasoning. ERVLA is trained with a reasoning-dropout strategy, enabling the model to absorb rich reasoning traces during training while predicting actions directly without CoT decoding during inference. This design improves scalability with increasing pre-training data and avoids autoregressive instability. ERVLA achieves state-of-the-art performance on LIBERO-Plus with an 86.9% success rate and reaches 53.2% success rate on VLABench, demonstrating strong out-of-distribution generalization. In real-robot experiments, ERVLA further outperforms competitive state-of-the-art baselines, especially on tasks requiring semantic disambiguation and long-horizon execution. Code, data, and model checkpoints will be released.",
            "link": "https://arxiv.org/abs/2606.03784v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03784v1",
            "published": "2026-06-02T15:37:59Z",
            "updated": "2026-06-02T15:37:59Z",
            "authors": [
              "Nan Sun",
              "Yuan Zhang",
              "Yongkun Yang",
              "Wentao Zhao",
              "Peiyan Li",
              "Jun Guo",
              "Wenxuan Song",
              "Pengxiang Ding"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 88,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 95,
              "novelty": 40,
              "impact": 75,
              "practicality": 60,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "构建大规模具身CoT数据集，提出并行预测新范式",
            "summaryCn": "构建含97.8万轨迹的具身CoT语料库，发现CoT应落地为动作引导，提出将CoT作为并行预测的新范式，解决自回归耦合误差问题。",
            "whyImportant": "重新审视具身CoT，大规模实验指导VLA推理设计。",
            "reasonTags": [
              "具身CoT",
              "大规模数据集",
              "并行预测"
            ],
            "innovationPoints": [
              "最大具身CoT数据集",
              "发现CoT应提供动作引导",
              "并行预测取代自回归前缀"
            ],
            "noveltyVerdict": "实验洞察具有创新性，方法有效",
            "duplicateRisk": "low",
            "dedupeNote": "聚焦CoT策略，与通用VLA方法不同",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation"
            ]
          },
          {
            "id": "2606.03943v1",
            "title": "PointAction: 3D Points as Universal Action Representations for Robot Control",
            "summary": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified,…",
            "summaryRaw": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified, making action grounding ambiguous. Meanwhile, scaling action supervision across diverse tasks and embodiments remains costly. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling. PointAction fine-tunes a foundation video generation model to jointly predict future RGB frames and dynamic 3D pointmaps, producing temporally consistent 3D motion of task-relevant scene geometry. These point dynamics serve as a structured, embodiment-agnostic action interface, which a diffusion-based action decoder maps to executable robot actions. By using metric 3D point dynamics as the interface between video prediction and control, PointAction reduces the ambiguity of RGB-only action grounding and supports transfer across tasks and embodiments with limited action supervision. Experiments show that PointAction achieves state-of-the-art 4D generation quality on robot scenes, outperforms existing baselines in simulation, and generalizes to two real robot arms unseen during pretraining.",
            "link": "https://arxiv.org/abs/2606.03943v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03943v1",
            "published": "2026-06-02T17:30:50Z",
            "updated": "2026-06-02T17:30:50Z",
            "authors": [
              "Mutian Tong",
              "Han Jiang",
              "Qiao Feng",
              "Lingjie Liu",
              "Jiatao Gu"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 85,
            "importanceLevel": "A",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 80,
              "impact": 70,
              "practicality": 60,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "用3D点轨迹作为通用动作接口衔接视频预测与机器人控制",
            "summaryCn": "PointAction微调基础视频生成模型，联合预测RGB帧和3D点云，将点动态作为具身无关动作表示，实现视频预测到动作的桥梁。",
            "whyImportant": "首次用3D点云作为VAM与动作策略的纽带，解决动作模糊性。",
            "reasonTags": [
              "视频动作模型",
              "3D点云",
              "动作表示"
            ],
            "innovationPoints": [
              "联合预测RGB和3D点云",
              "点动态作为通用动作接口",
              "微调视频基础模型"
            ],
            "noveltyVerdict": "新颖的4D点表示，创新性强",
            "duplicateRisk": "medium",
            "dedupeNote": "独特使用3D点云作为中间表示，区别于直接动作预测",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "PointAction: 3D Points as Universal Action Representations for Robot Control"
            ]
          },
          {
            "id": "2606.03868v1",
            "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
            "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective.",
            "summaryRaw": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions. In contrast, we keep the distribution broader by modeling the joint space of interaction videos and executable hand trajectories under multiple conditioning regimes. We propose Donk, a unified video-action denoising model for dexterous hands. With language, an initial image, and the initial hand state, Donk samples future videos and bimanual MANO trajectories as an action policy. Without the image condition, the same denoising architecture samples paired video-action rollouts from a text-conditioned distribution, turning the aligned video prior into a data engine. Across action, video, and text-only generation evaluations, Donk improves dexterous trajectory accuracy, preserves strong video fidelity, and produces smooth text-conditioned action rollouts under the same unified training recipe.",
            "link": "https://arxiv.org/abs/2606.03868v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03868v1",
            "published": "2026-06-02T16:39:23Z",
            "updated": "2026-06-02T16:39:23Z",
            "authors": [
              "Dingrui Wang",
              "YuAn Wang",
              "Jinkun Liu",
              "Yue Zhang",
              "Mattia Piccinini",
              "Yu Sun",
              "Johannes Betz"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 78,
            "importanceLevel": "A",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 80,
              "impact": 60,
              "practicality": 50,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "统一视频-动作去噪模型，用于灵巧手动作生成与数据扩增",
            "summaryCn": "Donk在潜在空间中联合去噪交互视频与可执行手动轨迹，可作为策略直接生成动作，也可作为数据引擎生成配对数据。",
            "whyImportant": "统一去噪框架，兼具策略与数据引擎双重功能。",
            "reasonTags": [
              "视频动作去噪",
              "灵巧手",
              "数据生成"
            ],
            "innovationPoints": [
              "联合视频-动作去噪",
              "多条件采样",
              "生成式数据引擎"
            ],
            "noveltyVerdict": "统一去噪范式新颖，功能多样",
            "duplicateRisk": "medium",
            "dedupeNote": "同时考虑视频与动作的联合分布，区别于单一模态模型",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation"
            ]
          },
          {
            "id": "2606.03127v1",
            "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
            "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guida…",
            "summaryRaw": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from interaction? We address this question with TTT-VLA, a test-time training framework based on Latent Prompt Optimization (LPO). During training, the latent prompt is learned with an additional proxy task, providing an extra learned conditioning signal for policy learning. At test time, TTT is performed by collecting interaction data from the current environment and optimizing only the latent prompt on those data using the proxy task's self-supervised signal, without modifying the policy itself. Experiments on SimplerEnv demonstrate that the proposed method consistently improves task success rates in both single- and multi-embodiment settings. Further analysis shows that the gains arise primarily from correcting a small number of critical decisions rather than globally altering policy behavior. These results suggest that LPO provides an effective and practical pathway for deployment-time improvement of foundation manipulation policies.",
            "link": "https://arxiv.org/abs/2606.03127v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03127v1",
            "published": "2026-06-02T04:10:39Z",
            "updated": "2026-06-02T04:10:39Z",
            "authors": [
              "Wenbo Zhang",
              "Jianxiong Li",
              "Shuai Yang",
              "Sijin Chen",
              "Jiajun Liu",
              "Lingqiao Liu",
              "Xiao Ma"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 80,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 80,
              "novelty": 60,
              "impact": 65,
              "practicality": 70,
              "coreAlignment": 90
            },
            "oneSentenceSummary": "测试时通过潜在提示优化实现VLA自适应",
            "summaryCn": "TTT-VLA在训练时学习潜在提示作为额外条件，测试时仅优化提示参数以适应分布变化，无需更新整个模型。",
            "whyImportant": "首次将测试时训练用于VLA，提升部署鲁棒性。",
            "reasonTags": [
              "测试时训练",
              "潜在提示优化",
              "自适应"
            ],
            "innovationPoints": [
              "提出潜在提示优化训练",
              "测试时仅优化提示进行适应",
              "不修改模型权重"
            ],
            "noveltyVerdict": "新颖的测试时适应方法，有创新性",
            "duplicateRisk": "low",
            "dedupeNote": "专注于部署适应，与其他VLA训练方法正交",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models"
            ]
          },
          {
            "id": "2606.03682v1",
            "title": "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation",
            "summary": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities.",
            "summaryRaw": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities. To address this, we curate diverse 3D scenes and develop an automated pipeline for large-scale navigation data, resulting in the GN-Matrix dataset. Building on a 3D Gaussian Splatting (3DGS) engine, we introduce a high-fidelity simulation platform supporting interactive roaming and collision-aware navigation. We further propose GN-Bench, the first BEV-based benchmark incorporating dynamic 3DGS avatars for human-robot interaction evaluation. To leverage the simulator, we develop an RL-driven navigation foundation model, Break and Establish (BAE). After supervised learning, DAgger exposes the model to rollout-induced states, breaking narrow expert-centric distributions and enabling downstream RL exploration. This unified VLN paradigm integrates map-based and map-free tasks, including instruction following, human following, and goal navigation. GN-BAE formalizes high-fidelity 3DGS-rendered Bird's Eye View representations as compact memory, unlocking latent spatial reasoning in VLMs. Extensive evaluations on GN-Bench and VLN-CE show that GN0 outperforms state-of-the-art VLN methods. Overall, GN-Matrix offers a unified framework spanning data, simulation, and learning, advancing embodied navigation in research and industrial applications.",
            "link": "https://arxiv.org/abs/2606.03682v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03682v1",
            "published": "2026-06-02T14:05:47Z",
            "updated": "2026-06-02T14:05:47Z",
            "authors": [
              "Xinhai Li",
              "Xiaotao Zhang",
              "Yuehao Huang",
              "Jiankun Dong",
              "Tianhang Wang",
              "Sunyao Zhou",
              "Yunzi Wu",
              "Chengnuo Sun"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 82,
            "importanceLevel": "A",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 70,
              "novelty": 70,
              "impact": 70,
              "practicality": 60,
              "coreAlignment": 50
            },
            "oneSentenceSummary": "统一生成、评估、策略学习的视觉语言导航范式",
            "summaryCn": "利用3DGS引擎构建高保真模拟器，提出GN-Bench基准和Break-and-Establish导航基础模型，支持动态人机交互。",
            "whyImportant": "首个BEV基准及交互评估，推动VLN基础模型。",
            "reasonTags": [
              "视觉语言导航",
              "3DGS模拟",
              "基础模型"
            ],
            "innovationPoints": [
              "3DGS引擎高保真模拟",
              "BEV基准与动态虚拟人",
              "RL驱动的导航基础模型"
            ],
            "noveltyVerdict": "集成生成与评估，较为新颖",
            "duplicateRisk": "low",
            "dedupeNote": "专注于导航，与操作类VLA不同场景",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation"
            ]
          },
          {
            "id": "2606.03609v1",
            "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
            "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go.",
            "summaryRaw": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through. Those that do target geometry, such as bird's-eye-view occupancy grids, flatten the three-dimensional environment onto a ground plane, discarding the above-ground and multi-level structure that shapes real navigation. What is missing is a predictive target that captures the navigable geometry an agent actually traverses, without photometric entanglement and without collapsing the third dimension. Our key idea is to model the open volume between buildings, the negative space, encoded as a 3D isovist: a spherical visibility-depth map recording the distance to the nearest surface in every direction. We introduce an embodied world model that predicts the next isovist from a short history of past isovists and a movement action. The prediction is formulated as a depth residual so the decoder inherits sharp building edges, trained with self-rollout scheduled sampling to keep corrupted context on the geometry manifold, and equipped with a persistent latent bird's-eye-view spatial map for cross-path consistency. Our central finding is emergent and unexpected: a single city-blind model trained on Manhattan and Paris develops a cross-city spatial signature, with city identity linearly decodable from its temporal latents far above single-frame baselines, so the signature lives in the learned dynamics rather than in appearance. The representation is lightweight, interpretable, and reproducible, offering a geometric substrate for spatial reasoning in embodied AI, robotics, and urban analysis, released with an open dataset and pipeline.",
            "link": "https://arxiv.org/abs/2606.03609v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03609v1",
            "published": "2026-06-02T13:11:30Z",
            "updated": "2026-06-02T13:11:30Z",
            "authors": [
              "Xuhui Lin",
              "Stephen Law",
              "Nanjiang Chen",
              "Kunyao Li",
              "Tao Yang"
            ],
            "categories": [
              "cs.RO",
              "cs.LG"
            ],
            "score": 65,
            "importanceLevel": "B",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 60,
              "novelty": 50,
              "impact": 50,
              "practicality": 30,
              "coreAlignment": 60
            },
            "oneSentenceSummary": "用3D等视域图建模城市可导航空间，揭示跨城几何签名",
            "summaryCn": "提出3D等视域世界模型，记录建筑间开放空间的距离信息，避免外观依赖，捕获三维可导航几何结构。",
            "whyImportant": "为导航智能体提供不依赖外观的空间表示。",
            "reasonTags": [
              "世界模型",
              "等视域",
              "导航几何"
            ],
            "innovationPoints": [
              "3D等视域表示",
              "无光度纠缠",
              "跨城几何模式"
            ],
            "noveltyVerdict": "在导航空间表示上有创新，但作用有限",
            "duplicateRisk": "low",
            "dedupeNote": "独特的世界表示，不同于视觉预测型世界模型",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature"
            ]
          },
          {
            "id": "2606.03598v1",
            "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
            "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors.",
            "summaryRaw": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories. It systematically under-samples brief but causally critical sub-skills, leading to phase starvation, and completely overlooks the varying degrees of forgetting across historical tasks. To overcome these limitations, we introduce PHASER, an architecture-agnostic continual learning framework. PHASER employs a phase-centric capacity allocation to guarantee equal memory support for all sub-skills, coupled with a multi-modal interference routing strategy that dynamically prioritizes historical phases at high risk of forgetting. Furthermore, to enable fully autonomous lifelong adaptation, we integrate Auto-PC, a lightweight pipeline combining unsupervised action-signal change-point detection with VLM-based semantic verification to extract temporal boundaries without intensive manual supervision. Evaluated across three VLA backbones on LIBERO continual learning suites, PHASER yields substantial empirical improvements, increasing Average Success Rate (ASR) by up to 31% over matched-budget ER and achieving an 87.8% final ASR on the LIBERO-Goal CL setting.",
            "link": "https://arxiv.org/abs/2606.03598v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03598v1",
            "published": "2026-06-02T13:04:15Z",
            "updated": "2026-06-02T13:04:15Z",
            "authors": [
              "Ziyang Chen",
              "Shaoguang Wang",
              "Weiyu Guo",
              "Qianyi Cai",
              "He Zhang",
              "Pengteng Li",
              "Yiren Zhao",
              "Yandong Guo"
            ],
            "categories": [
              "cs.AI",
              "cs.CV",
              "cs.RO"
            ],
            "score": 70,
            "importanceLevel": "B",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 85,
              "novelty": 30,
              "impact": 55,
              "practicality": 40,
              "coreAlignment": 85
            },
            "oneSentenceSummary": "面向VLA的持续学习框架，缓解灾难性遗忘",
            "summaryCn": "PHASER根据操作阶段分配记忆容量，结合语义重放，保证各子技能均衡训练，解决VLA持续学习中的遗忘问题。",
            "whyImportant": "解决VLA持续学习瓶颈，使模型能渐进掌握新技能。",
            "reasonTags": [
              "持续学习",
              "经验重放",
              "灾难性遗忘"
            ],
            "innovationPoints": [
              "阶段感知记忆分配",
              "语义重放策略"
            ],
            "noveltyVerdict": "在VLA持续学习场景中有针对性创新",
            "duplicateRisk": "medium",
            "dedupeNote": "专门针对VLA操作任务的分阶段特性设计",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models"
            ]
          },
          {
            "id": "2606.03240v1",
            "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
            "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning.",
            "summaryRaw": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) features for policy rollout. The robot's proprioceptive state queries the GEP feature grid, producing compact, phase-dependent geometry tokens for action prediction. GeoAlign achieves 99.0% on LIBERO, 85.3% across three SimplerEnv-Fractal tasks, and 78.8% on eight geometry-critical real-world ALOHA tasks, with ablations confirming the value of geometry post-training and proprioceptive-state-guided querying.",
            "link": "https://arxiv.org/abs/2606.03240v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03240v1",
            "published": "2026-06-02T07:01:18Z",
            "updated": "2026-06-02T07:01:18Z",
            "authors": [
              "Yizhi Chen",
              "Zhanxiang Cao",
              "Xinyi Peng",
              "Yixiao Zheng",
              "Xiaxi Si",
              "Yiheng Li",
              "Liyun Yan",
              "Keqi Zhu"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 60,
            "importanceLevel": "B",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 75,
              "novelty": 30,
              "impact": 45,
              "practicality": 40,
              "coreAlignment": 80
            },
            "oneSentenceSummary": "状态引导的空间对齐提升VLA几何推理",
            "summaryCn": "GeoAlign通过RGB-D后训练几何分支，以本体状态查询生成紧凑几何令牌，增强VLA对空间关系的理解。",
            "whyImportant": "补齐VLA空间推理短板，提升精度。",
            "reasonTags": [
              "空间对齐",
              "几何增强",
              "状态引导"
            ],
            "innovationPoints": [
              "RGB几何分支后训练",
              "状态引导的几何令牌"
            ],
            "noveltyVerdict": "针对VLA空间能力的改进，有一定创新",
            "duplicateRisk": "low",
            "dedupeNote": "独特地结合几何后训练与状态查询，与其他VLA方法互补",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models"
            ]
          },
          {
            "id": "2606.03724v1",
            "title": "Same Weights, Different Robot: A Deployment Safety View of VLA Policies",
            "summary": "Vision-language-action (VLA) policies are often treated as checkpoint-defined objects: if the weights, prompt, and benchmark suite match, the deployment is assumed to be the same policy. Robot execution breaks this assumption because the same normalized model output can become a different physical action after action unnormalization and…",
            "summaryRaw": "Vision-language-action (VLA) policies are often treated as checkpoint-defined objects: if the weights, prompt, and benchmark suite match, the deployment is assumed to be the same policy. Robot execution breaks this assumption because the same normalized model output can become a different physical action after action unnormalization and controller conventions are applied. This creates a deployment-safety gap: safety review can certify the checkpoint while missing the executable robot policy that reaches the controller. We formalize this gap as an executable policy specification problem: a VLA policy includes the learned model, action representation, metadata-selected unnormalizer, and controller-facing conventions. Under this view, identical checkpoints can be executable-inequivalent. For quantile-style action normalization, we derive a closed-form metadata mismatch transform and an ExecSpec certificate that measures action-space semantic drift without model inference or rollout. On LIBERO-Goal replay, substituting a plausible sibling metadata key yields mean drift 0.199 over six non-gripper action dimensions and reduces success from 28/28 to 2/28 under full substitution. On LIBERO-Spatial replay, the same substituted key reduces success from 26/26 to 0/26. The same full-substitution protocol gives 0/28 success for all four Object substitutions and 0/23 or 1/23 success on Long. Identity-key, replay-validity, no-op filtering, raw-vs-correct replay, mask/gripper, synthetic upper-bound, and OpenVLA-style unnormalizer interface checks rule out several simpler explanations. These results do not certify closed-loop or hardware safety. They support a narrower deployment-safety view: action-space metadata is part of the executable policy and should be checked before rollout.",
            "link": "https://arxiv.org/abs/2606.03724v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03724v1",
            "published": "2026-06-02T14:45:00Z",
            "updated": "2026-06-02T14:45:00Z",
            "authors": [
              "Jianwei Tai"
            ],
            "categories": [],
            "score": 55,
            "importanceLevel": "B",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 60,
              "novelty": 40,
              "impact": 30,
              "practicality": 50,
              "coreAlignment": 70
            },
            "oneSentenceSummary": "揭示VLA部署安全漏洞：同一权重因反归一化导致不同动作",
            "summaryCn": "指出VLA策略在部署时，由于动作反归一化和控制器约定，相同输入可产生不同物理动作，提出安全评估框架。",
            "whyImportant": "提醒安全性审视不能仅依赖权重检验，需考虑部署差异。",
            "reasonTags": [
              "部署安全",
              "动作反归一化",
              "策略等价性"
            ],
            "innovationPoints": [
              "提出可执行策略规范问题",
              "推导反归一化变换关系"
            ],
            "noveltyVerdict": "揭示一个重要但被忽视的安全问题，思路新颖",
            "duplicateRisk": "low",
            "dedupeNote": "聚焦VLA部署的安全视角，与其他方法不同",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Same Weights, Different Robot: A Deployment Safety View of VLA Policies"
            ]
          }
        ],
        "vla": [
          {
            "id": "2606.03392v1",
            "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
            "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA).",
            "summaryRaw": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy. OpenEAI-VLA builds on Qwen3-VL-4B and uses a Diffusion Transformer action head, and is trained in two stages with only open-source robot and multimodal datasets. Across four real-world manipulation tasks, OpenEAI-Arm outperforms two commercial 6+1-dof arms under the same policy, and OpenEAI-VLA achieves success rates comparable to the large-scale pretrained pi0 baseline with only limited pretraining data. We will release the full hardware designs, drivers, models, and training/data pipelines to support reproducible research and scalable data collection. Our codes, layouts, and models will be released after the paper is accepted.",
            "link": "https://arxiv.org/abs/2606.03392v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03392v1",
            "published": "2026-06-02T09:34:08Z",
            "updated": "2026-06-02T09:34:08Z",
            "authors": [
              "Jinyuan Zhang",
              "Luoyi Fan",
              "Leiyu Wang",
              "Yeqiang Wang",
              "Yicheng Zhu",
              "Cewu Lu",
              "Nanyang Ye"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 85,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 20,
              "impact": 80,
              "practicality": 95,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "开源具身智能平台，集成低成本机械臂与VLA模型",
            "summaryCn": "OpenEAI-Platform提供开源6+1自由度机械臂与基于Qwen3-VL-4B的VLA模型，仅用开源数据训练，实际任务成功率可比肩大规模预训练基准pi0。",
            "whyImportant": "开源平台降低具身AI门槛，促进VLA社区发展。",
            "reasonTags": [
              "开源平台",
              "低成本机械臂",
              "VLA模型"
            ],
            "innovationPoints": [
              "低成本硬件设计",
              "两阶段训练VLA模型",
              "全开源生态"
            ],
            "noveltyVerdict": "工程集成创新，新颖度较低",
            "duplicateRisk": "low",
            "dedupeNote": "提供硬件-软件统一平台，与其他VLA方法互补",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform"
            ]
          },
          {
            "id": "2606.03784v1",
            "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
            "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale.",
            "summaryRaw": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data. Through extensive experiments, we find that effective embodied CoT should ground high-level semantic understanding into concrete action guidance, such as end-effector movement descriptions and image-space trajectories, while high-level reasoning alone brings only marginal gains. We further show that explicit CoT does not scale reliably when used as an autoregressive action prefix, as it suffers from compounding inference errors and unstable reasoning-action coupling. To address these limitations, we propose ERVLA, a VLA model that uses embodied CoT as representation-shaping supervision rather than mandatory test-time reasoning. ERVLA is trained with a reasoning-dropout strategy, enabling the model to absorb rich reasoning traces during training while predicting actions directly without CoT decoding during inference. This design improves scalability with increasing pre-training data and avoids autoregressive instability. ERVLA achieves state-of-the-art performance on LIBERO-Plus with an 86.9% success rate and reaches 53.2% success rate on VLABench, demonstrating strong out-of-distribution generalization. In real-robot experiments, ERVLA further outperforms competitive state-of-the-art baselines, especially on tasks requiring semantic disambiguation and long-horizon execution. Code, data, and model checkpoints will be released.",
            "link": "https://arxiv.org/abs/2606.03784v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03784v1",
            "published": "2026-06-02T15:37:59Z",
            "updated": "2026-06-02T15:37:59Z",
            "authors": [
              "Nan Sun",
              "Yuan Zhang",
              "Yongkun Yang",
              "Wentao Zhao",
              "Peiyan Li",
              "Jun Guo",
              "Wenxuan Song",
              "Pengxiang Ding"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 88,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 95,
              "novelty": 40,
              "impact": 75,
              "practicality": 60,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "构建大规模具身CoT数据集，提出并行预测新范式",
            "summaryCn": "构建含97.8万轨迹的具身CoT语料库，发现CoT应落地为动作引导，提出将CoT作为并行预测的新范式，解决自回归耦合误差问题。",
            "whyImportant": "重新审视具身CoT，大规模实验指导VLA推理设计。",
            "reasonTags": [
              "具身CoT",
              "大规模数据集",
              "并行预测"
            ],
            "innovationPoints": [
              "最大具身CoT数据集",
              "发现CoT应提供动作引导",
              "并行预测取代自回归前缀"
            ],
            "noveltyVerdict": "实验洞察具有创新性，方法有效",
            "duplicateRisk": "low",
            "dedupeNote": "聚焦CoT策略，与通用VLA方法不同",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation"
            ]
          },
          {
            "id": "2606.03127v1",
            "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
            "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guida…",
            "summaryRaw": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from interaction? We address this question with TTT-VLA, a test-time training framework based on Latent Prompt Optimization (LPO). During training, the latent prompt is learned with an additional proxy task, providing an extra learned conditioning signal for policy learning. At test time, TTT is performed by collecting interaction data from the current environment and optimizing only the latent prompt on those data using the proxy task's self-supervised signal, without modifying the policy itself. Experiments on SimplerEnv demonstrate that the proposed method consistently improves task success rates in both single- and multi-embodiment settings. Further analysis shows that the gains arise primarily from correcting a small number of critical decisions rather than globally altering policy behavior. These results suggest that LPO provides an effective and practical pathway for deployment-time improvement of foundation manipulation policies.",
            "link": "https://arxiv.org/abs/2606.03127v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03127v1",
            "published": "2026-06-02T04:10:39Z",
            "updated": "2026-06-02T04:10:39Z",
            "authors": [
              "Wenbo Zhang",
              "Jianxiong Li",
              "Shuai Yang",
              "Sijin Chen",
              "Jiajun Liu",
              "Lingqiao Liu",
              "Xiao Ma"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 80,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 80,
              "novelty": 60,
              "impact": 65,
              "practicality": 70,
              "coreAlignment": 90
            },
            "oneSentenceSummary": "测试时通过潜在提示优化实现VLA自适应",
            "summaryCn": "TTT-VLA在训练时学习潜在提示作为额外条件，测试时仅优化提示参数以适应分布变化，无需更新整个模型。",
            "whyImportant": "首次将测试时训练用于VLA，提升部署鲁棒性。",
            "reasonTags": [
              "测试时训练",
              "潜在提示优化",
              "自适应"
            ],
            "innovationPoints": [
              "提出潜在提示优化训练",
              "测试时仅优化提示进行适应",
              "不修改模型权重"
            ],
            "noveltyVerdict": "新颖的测试时适应方法，有创新性",
            "duplicateRisk": "low",
            "dedupeNote": "专注于部署适应，与其他VLA训练方法正交",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models"
            ]
          },
          {
            "id": "2606.03598v1",
            "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
            "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors.",
            "summaryRaw": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. However, deploying these models in open-ended environments requires continuously acquiring novel skills, a process that inevitably triggers severe catastrophic forgetting of previously learned behaviors. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories. It systematically under-samples brief but causally critical sub-skills, leading to phase starvation, and completely overlooks the varying degrees of forgetting across historical tasks. To overcome these limitations, we introduce PHASER, an architecture-agnostic continual learning framework. PHASER employs a phase-centric capacity allocation to guarantee equal memory support for all sub-skills, coupled with a multi-modal interference routing strategy that dynamically prioritizes historical phases at high risk of forgetting. Furthermore, to enable fully autonomous lifelong adaptation, we integrate Auto-PC, a lightweight pipeline combining unsupervised action-signal change-point detection with VLM-based semantic verification to extract temporal boundaries without intensive manual supervision. Evaluated across three VLA backbones on LIBERO continual learning suites, PHASER yields substantial empirical improvements, increasing Average Success Rate (ASR) by up to 31% over matched-budget ER and achieving an 87.8% final ASR on the LIBERO-Goal CL setting.",
            "link": "https://arxiv.org/abs/2606.03598v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03598v1",
            "published": "2026-06-02T13:04:15Z",
            "updated": "2026-06-02T13:04:15Z",
            "authors": [
              "Ziyang Chen",
              "Shaoguang Wang",
              "Weiyu Guo",
              "Qianyi Cai",
              "He Zhang",
              "Pengteng Li",
              "Yiren Zhao",
              "Yandong Guo"
            ],
            "categories": [
              "cs.AI",
              "cs.CV",
              "cs.RO"
            ],
            "score": 70,
            "importanceLevel": "B",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 85,
              "novelty": 30,
              "impact": 55,
              "practicality": 40,
              "coreAlignment": 85
            },
            "oneSentenceSummary": "面向VLA的持续学习框架，缓解灾难性遗忘",
            "summaryCn": "PHASER根据操作阶段分配记忆容量，结合语义重放，保证各子技能均衡训练，解决VLA持续学习中的遗忘问题。",
            "whyImportant": "解决VLA持续学习瓶颈，使模型能渐进掌握新技能。",
            "reasonTags": [
              "持续学习",
              "经验重放",
              "灾难性遗忘"
            ],
            "innovationPoints": [
              "阶段感知记忆分配",
              "语义重放策略"
            ],
            "noveltyVerdict": "在VLA持续学习场景中有针对性创新",
            "duplicateRisk": "medium",
            "dedupeNote": "专门针对VLA操作任务的分阶段特性设计",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models"
            ]
          },
          {
            "id": "2606.03240v1",
            "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
            "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning.",
            "summaryRaw": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. We introduce GeoAlign, a state-guided spatial alignment architecture for VLA policy learning. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) features for policy rollout. The robot's proprioceptive state queries the GEP feature grid, producing compact, phase-dependent geometry tokens for action prediction. GeoAlign achieves 99.0% on LIBERO, 85.3% across three SimplerEnv-Fractal tasks, and 78.8% on eight geometry-critical real-world ALOHA tasks, with ablations confirming the value of geometry post-training and proprioceptive-state-guided querying.",
            "link": "https://arxiv.org/abs/2606.03240v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03240v1",
            "published": "2026-06-02T07:01:18Z",
            "updated": "2026-06-02T07:01:18Z",
            "authors": [
              "Yizhi Chen",
              "Zhanxiang Cao",
              "Xinyi Peng",
              "Yixiao Zheng",
              "Xiaxi Si",
              "Yiheng Li",
              "Liyun Yan",
              "Keqi Zhu"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 60,
            "importanceLevel": "B",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 75,
              "novelty": 30,
              "impact": 45,
              "practicality": 40,
              "coreAlignment": 80
            },
            "oneSentenceSummary": "状态引导的空间对齐提升VLA几何推理",
            "summaryCn": "GeoAlign通过RGB-D后训练几何分支，以本体状态查询生成紧凑几何令牌，增强VLA对空间关系的理解。",
            "whyImportant": "补齐VLA空间推理短板，提升精度。",
            "reasonTags": [
              "空间对齐",
              "几何增强",
              "状态引导"
            ],
            "innovationPoints": [
              "RGB几何分支后训练",
              "状态引导的几何令牌"
            ],
            "noveltyVerdict": "针对VLA空间能力的改进，有一定创新",
            "duplicateRisk": "low",
            "dedupeNote": "独特地结合几何后训练与状态查询，与其他VLA方法互补",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models"
            ]
          },
          {
            "id": "2606.03682v1",
            "title": "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation",
            "summary": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities.",
            "summaryRaw": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities. To address this, we curate diverse 3D scenes and develop an automated pipeline for large-scale navigation data, resulting in the GN-Matrix dataset. Building on a 3D Gaussian Splatting (3DGS) engine, we introduce a high-fidelity simulation platform supporting interactive roaming and collision-aware navigation. We further propose GN-Bench, the first BEV-based benchmark incorporating dynamic 3DGS avatars for human-robot interaction evaluation. To leverage the simulator, we develop an RL-driven navigation foundation model, Break and Establish (BAE). After supervised learning, DAgger exposes the model to rollout-induced states, breaking narrow expert-centric distributions and enabling downstream RL exploration. This unified VLN paradigm integrates map-based and map-free tasks, including instruction following, human following, and goal navigation. GN-BAE formalizes high-fidelity 3DGS-rendered Bird's Eye View representations as compact memory, unlocking latent spatial reasoning in VLMs. Extensive evaluations on GN-Bench and VLN-CE show that GN0 outperforms state-of-the-art VLN methods. Overall, GN-Matrix offers a unified framework spanning data, simulation, and learning, advancing embodied navigation in research and industrial applications.",
            "link": "https://arxiv.org/abs/2606.03682v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03682v1",
            "published": "2026-06-02T14:05:47Z",
            "updated": "2026-06-02T14:05:47Z",
            "authors": [
              "Xinhai Li",
              "Xiaotao Zhang",
              "Yuehao Huang",
              "Jiankun Dong",
              "Tianhang Wang",
              "Sunyao Zhou",
              "Yunzi Wu",
              "Chengnuo Sun"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 82,
            "importanceLevel": "A",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 70,
              "novelty": 70,
              "impact": 70,
              "practicality": 60,
              "coreAlignment": 50
            },
            "oneSentenceSummary": "统一生成、评估、策略学习的视觉语言导航范式",
            "summaryCn": "利用3DGS引擎构建高保真模拟器，提出GN-Bench基准和Break-and-Establish导航基础模型，支持动态人机交互。",
            "whyImportant": "首个BEV基准及交互评估，推动VLN基础模型。",
            "reasonTags": [
              "视觉语言导航",
              "3DGS模拟",
              "基础模型"
            ],
            "innovationPoints": [
              "3DGS引擎高保真模拟",
              "BEV基准与动态虚拟人",
              "RL驱动的导航基础模型"
            ],
            "noveltyVerdict": "集成生成与评估，较为新颖",
            "duplicateRisk": "low",
            "dedupeNote": "专注于导航，与操作类VLA不同场景",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation"
            ]
          }
        ],
        "wam": [
          {
            "id": "2606.03943v1",
            "title": "PointAction: 3D Points as Universal Action Representations for Robot Control",
            "summary": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified,…",
            "summaryRaw": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified, making action grounding ambiguous. Meanwhile, scaling action supervision across diverse tasks and embodiments remains costly. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling. PointAction fine-tunes a foundation video generation model to jointly predict future RGB frames and dynamic 3D pointmaps, producing temporally consistent 3D motion of task-relevant scene geometry. These point dynamics serve as a structured, embodiment-agnostic action interface, which a diffusion-based action decoder maps to executable robot actions. By using metric 3D point dynamics as the interface between video prediction and control, PointAction reduces the ambiguity of RGB-only action grounding and supports transfer across tasks and embodiments with limited action supervision. Experiments show that PointAction achieves state-of-the-art 4D generation quality on robot scenes, outperforms existing baselines in simulation, and generalizes to two real robot arms unseen during pretraining.",
            "link": "https://arxiv.org/abs/2606.03943v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03943v1",
            "published": "2026-06-02T17:30:50Z",
            "updated": "2026-06-02T17:30:50Z",
            "authors": [
              "Mutian Tong",
              "Han Jiang",
              "Qiao Feng",
              "Lingjie Liu",
              "Jiatao Gu"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 85,
            "importanceLevel": "A",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 80,
              "impact": 70,
              "practicality": 60,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "用3D点轨迹作为通用动作接口衔接视频预测与机器人控制",
            "summaryCn": "PointAction微调基础视频生成模型，联合预测RGB帧和3D点云，将点动态作为具身无关动作表示，实现视频预测到动作的桥梁。",
            "whyImportant": "首次用3D点云作为VAM与动作策略的纽带，解决动作模糊性。",
            "reasonTags": [
              "视频动作模型",
              "3D点云",
              "动作表示"
            ],
            "innovationPoints": [
              "联合预测RGB和3D点云",
              "点动态作为通用动作接口",
              "微调视频基础模型"
            ],
            "noveltyVerdict": "新颖的4D点表示，创新性强",
            "duplicateRisk": "medium",
            "dedupeNote": "独特使用3D点云作为中间表示，区别于直接动作预测",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "PointAction: 3D Points as Universal Action Representations for Robot Control"
            ]
          },
          {
            "id": "2606.03868v1",
            "title": "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation",
            "summary": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective.",
            "summaryRaw": "Recent world action models leverage video foundation models by aligning broad visual-dynamics priors with executable robot actions. We revisit this alignment from a distributional perspective. Existing formulations typically narrow the aligned prior into an observation-conditioned policy distribution over future actions. In contrast, we keep the distribution broader by modeling the joint space of interaction videos and executable hand trajectories under multiple conditioning regimes. We propose Donk, a unified video-action denoising model for dexterous hands. With language, an initial image, and the initial hand state, Donk samples future videos and bimanual MANO trajectories as an action policy. Without the image condition, the same denoising architecture samples paired video-action rollouts from a text-conditioned distribution, turning the aligned video prior into a data engine. Across action, video, and text-only generation evaluations, Donk improves dexterous trajectory accuracy, preserves strong video fidelity, and produces smooth text-conditioned action rollouts under the same unified training recipe.",
            "link": "https://arxiv.org/abs/2606.03868v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03868v1",
            "published": "2026-06-02T16:39:23Z",
            "updated": "2026-06-02T16:39:23Z",
            "authors": [
              "Dingrui Wang",
              "YuAn Wang",
              "Jinkun Liu",
              "Yue Zhang",
              "Mattia Piccinini",
              "Yu Sun",
              "Johannes Betz"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 78,
            "importanceLevel": "A",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 90,
              "novelty": 80,
              "impact": 60,
              "practicality": 50,
              "coreAlignment": 95
            },
            "oneSentenceSummary": "统一视频-动作去噪模型，用于灵巧手动作生成与数据扩增",
            "summaryCn": "Donk在潜在空间中联合去噪交互视频与可执行手动轨迹，可作为策略直接生成动作，也可作为数据引擎生成配对数据。",
            "whyImportant": "统一去噪框架，兼具策略与数据引擎双重功能。",
            "reasonTags": [
              "视频动作去噪",
              "灵巧手",
              "数据生成"
            ],
            "innovationPoints": [
              "联合视频-动作去噪",
              "多条件采样",
              "生成式数据引擎"
            ],
            "noveltyVerdict": "统一去噪范式新颖，功能多样",
            "duplicateRisk": "medium",
            "dedupeNote": "同时考虑视频与动作的联合分布，区别于单一模态模型",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "Unified Video-Action Joint Denoising for Dexterous Action and Data Generation"
            ]
          },
          {
            "id": "2606.03609v1",
            "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
            "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go.",
            "summaryRaw": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through. Those that do target geometry, such as bird's-eye-view occupancy grids, flatten the three-dimensional environment onto a ground plane, discarding the above-ground and multi-level structure that shapes real navigation. What is missing is a predictive target that captures the navigable geometry an agent actually traverses, without photometric entanglement and without collapsing the third dimension. Our key idea is to model the open volume between buildings, the negative space, encoded as a 3D isovist: a spherical visibility-depth map recording the distance to the nearest surface in every direction. We introduce an embodied world model that predicts the next isovist from a short history of past isovists and a movement action. The prediction is formulated as a depth residual so the decoder inherits sharp building edges, trained with self-rollout scheduled sampling to keep corrupted context on the geometry manifold, and equipped with a persistent latent bird's-eye-view spatial map for cross-path consistency. Our central finding is emergent and unexpected: a single city-blind model trained on Manhattan and Paris develops a cross-city spatial signature, with city identity linearly decodable from its temporal latents far above single-frame baselines, so the signature lives in the learned dynamics rather than in appearance. The representation is lightweight, interpretable, and reproducible, offering a geometric substrate for spatial reasoning in embodied AI, robotics, and urban analysis, released with an open dataset and pipeline.",
            "link": "https://arxiv.org/abs/2606.03609v1",
            "pdfLink": "https://arxiv.org/pdf/2606.03609v1",
            "published": "2026-06-02T13:11:30Z",
            "updated": "2026-06-02T13:11:30Z",
            "authors": [
              "Xuhui Lin",
              "Stephen Law",
              "Nanjiang Chen",
              "Kunyao Li",
              "Tao Yang"
            ],
            "categories": [
              "cs.RO",
              "cs.LG"
            ],
            "score": 65,
            "importanceLevel": "B",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 60,
              "novelty": 50,
              "impact": 50,
              "practicality": 30,
              "coreAlignment": 60
            },
            "oneSentenceSummary": "用3D等视域图建模城市可导航空间，揭示跨城几何签名",
            "summaryCn": "提出3D等视域世界模型，记录建筑间开放空间的距离信息，避免外观依赖，捕获三维可导航几何结构。",
            "whyImportant": "为导航智能体提供不依赖外观的空间表示。",
            "reasonTags": [
              "世界模型",
              "等视域",
              "导航几何"
            ],
            "innovationPoints": [
              "3D等视域表示",
              "无光度纠缠",
              "跨城几何模式"
            ],
            "noveltyVerdict": "在导航空间表示上有创新，但作用有限",
            "duplicateRisk": "low",
            "dedupeNote": "独特的世界表示，不同于视觉预测型世界模型",
            "retrievalGroups": [
              "robotics"
            ],
            "mergedCount": 1,
            "mergedTitles": [
              "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature"
            ]
          }
        ]
      },
      "dailyBrief": {
        "overall": "今日VLA与WAM领域有多项进展：大规模具身CoT数据集发布，测试时适应方法提升VLA鲁棒性，3D点动作接口衔接视频预测与机器人控制，统一去噪框架用于灵巧手操作。",
        "vla": "VLA方向，大规模实验重新审视具身CoT，发现应提供动作引导而非高层推理；TTT-VLA实现测试时潜在提示优化；PHASER解决持续学习遗忘问题。",
        "wam": "WAM方向，PointAction用3D点云作为通用动作表示；Unified Video-Action联合去噪模型兼具策略与数据生成功能；3D等视域世界模型建模可导航几何。",
        "retrieval": "从robotics组候选论文中筛选出多篇VLA与WAM相关论文，涵盖策略学习、世界模型及部署安全等主题。"
      }
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-02T15:10:06.610001+00:00",
      "paperCount": 10,
      "papers": [
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
          "score": 95,
          "importanceLevel": "S",
          "oneSentenceSummary": "WALL-WM以事件为单位预训练世界动作模型，统一VLA学习。",
          "summaryCn": "WALL-WM提出以语义事件为原子单元的世界动作模型预训练方法，摒弃固定长度块限制，通过事件级数据标注与聚类采样构建数据生态，支持事件模式与统一模式双推理，在大规模真实场景泛化评估中达到最新性能，显著提升跨任务泛化，为VLA通用世界模型提供可扩展方案。",
          "whyImportant": "根本解决VLA训练的粒度不匹配，提供通用世界动作模型扩展方案。",
          "reasonTags": [
            "世界动作模型",
            "事件预训练",
            "VLA",
            "数据生态"
          ],
          "innovationPoints": [
            "事件级VLA预训练框架",
            "双模式推理：事件模式与统一模式",
            "大规模实际泛化评估"
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
          "score": 92,
          "importanceLevel": "S",
          "oneSentenceSummary": "Lie Diffuser Actor在SE(3)上进行扩散，根治欧几里得谬误。",
          "summaryCn": "扩散VLA将SE(3)姿态视为R^12向量，导致流形漂移、等变性缺失。本文提出Lie Diffuser Actor，在SE(3)切空间进行分数匹配，通过左不变SDE和指数映射生成动作，确保等变性与测地最优。为VLA几何表示提供正确范式，实验在CALVIN和真实机器人操纵中显著优于基线。",
          "whyImportant": "从几何底层修正VLA表示错误，提升操纵精度与鲁棒性。",
          "reasonTags": [
            "SE(3)扩散",
            "几何纠偏",
            "VLA",
            "机器人操纵"
          ],
          "innovationPoints": [
            "SE(3)内在扩散生成",
            "左不变SDE与切线分数",
            "测地轨迹保证"
          ]
        },
        {
          "id": "2606.02486v1",
          "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
          "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow.",
          "summaryRaw": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow. A language-and-motion saliency mask concentrates prediction on task-relevant patches, and the model rolls forward for an adaptive horizon, halting when prediction uncertainty crosses a threshold. The frozen action decoder then receives the predicted future tokens in place of the current ones. AHEAD adds 4.9M parameters to a frozen 7B OpenVLA and reaches 79 to 97% success across 20 dynamic simulation scenarios where the strongest baseline reaches 31 to 58%. On a physical UFactory xArm 7, AHEAD succeeds on 29/30 to 30/30 on three conveyor and rolling-ball tasks, 23/30 on paddle interception, and 19/30 on projectile catching where every baseline scores 0/30.",
          "link": "https://arxiv.org/abs/2606.02486v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02486v1",
          "published": "2026-06-01T16:55:38Z",
          "updated": "2026-06-01T16:55:38Z",
          "authors": [
            "Shahram Najam Syed",
            "Arthur Jakobsson",
            "Haoran Hao",
            "Jeffrey Ichnowski"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 90,
          "importanceLevel": "S",
          "oneSentenceSummary": "AHEAD冻结VLA上加装运动世界模型实现动态操作。",
          "summaryCn": "AHEAD为静态VLA模型加装运动感知潜在世界模型，利用光流估计速度和加速度，预测VLA特征空间中的未来patch tokens，自适应滚动至不确定性阈值，再将预测特征输入冻结的动作解码器。在物理臂上实现传送带抓取、飞球拦截等动态任务，成功率达29/30-30/30，而基线全失败，显著提升动态操作能力。",
          "whyImportant": "使静态VLA零修改适应动态场景，极低参数开销实现高效抓取。",
          "reasonTags": [
            "动态VLA",
            "预测世界模型",
            "机器人",
            "光流"
          ],
          "innovationPoints": [
            "冻结VLA上的潜在世界模型",
            "光流驱动的patch token预测",
            "自适应不确定性滚动"
          ]
        },
        {
          "id": "2606.02551v1",
          "title": "AFUN: Towards an Affordance Foundation Model for Functionality Understanding",
          "summary": "Affordance understanding bridges visual perception and physical action, serving as an explainable interface for robot manipulation in open and unstructured real-world environments. ourmodel can be deployed for real-world robot manipulation without finetuning for robot embodiment or using task-specific heuristics, demonstrating the abilit…",
          "summaryRaw": "Affordance understanding bridges visual perception and physical action, serving as an explainable interface for robot manipulation in open and unstructured real-world environments. Yet, building an affordance foundation model that not only understands where and how the interaction should happen, but also generalizes across diverse environments, objects, and tasks, remains a long-standing research challenge. Existing methods typically address only part of this challenge, either localizing task-relevant regions without specifying executable motion, or predicting motion but with limited scalability. In this paper, we present ourmodel, a step towards an affordance foundation model for functionality understanding. From a single RGB-D observation and a language task description, ourmodel predicts a task-conditional functional mask (where to interact) and a 3D post-contact motion curve (how to interact). To support open-world generalization, we build a large-scale standardized data pipeline that converts heterogeneous robot, human, simulation, and real-world scan data into a shared affordance schema with language, masks, and object-centric 3D motion labels. We evaluate ourmodel from three aspects: for affordance segmentation, ourmodel outperforms all baselines by a large margin across 8 test sets from 4 benchmarks, improving mean gIoU/cIoU by +23.9/+26.3; for contact-point prediction, it predicts substantially more accurate points, with a 12.7--61.3% hit-rate gain over the best baseline; and for 3D motion, it achieves the best performance on all three test sets. ourmodel can be deployed for real-world robot manipulation without finetuning for robot embodiment or using task-specific heuristics, demonstrating the ability to adapt to open-world affordance tasks. Project page: https://www.zhaoningwang.com/AFUN",
          "link": "https://arxiv.org/abs/2606.02551v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02551v1",
          "published": "2026-06-01T17:50:16Z",
          "updated": "2026-06-01T17:50:16Z",
          "authors": [
            "Zhaoning Wang",
            "Yi Zhong",
            "Jiawei Fu",
            "Henrik I. Christensen",
            "Jun Gao"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 90,
          "importanceLevel": "A",
          "oneSentenceSummary": "AFUN供能基础模型理解交互位置与3D动作。",
          "summaryCn": "AFUN为通用可供性基础模型，从单张RGB-D和语言指令预测任务条件的功能掩码与3D后接触运动曲线。构建大规模标准化数据管道转换异构数据。在多个基准上大幅度超越现有方法，可零样本部署至真实机器人，实现开放世界操作。统一位置与动作预测，提供可解释交互接口。",
          "whyImportant": "统一语言、视觉与动作，提供可泛化的可供性基础模型。",
          "reasonTags": [
            "可供性基础模型",
            "机器人操作",
            "3D运动",
            "数据标准化"
          ],
          "innovationPoints": [
            "任务条件功能掩码与3D运动联合预测",
            "跨源数据标准化管道",
            "零样本真实世界部署"
          ]
        },
        {
          "id": "2606.02577v1",
          "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
          "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirem…",
          "summaryRaw": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmentation, or suffer from embodiment hallucinations that yield physically infeasible motions. We present a generalizable embodiment-centric world model that achieves scalable data generation by synthesizing photorealistic demonstrations with novel objects, in novel scenes, and from novel viewpoints. Our approach anchors generation to rendered robot motion while conditioning on explicit scene and object priors, effectively decoupling trajectory execution from environment synthesis. This formulation has the potential to unlock two powerful data scaling capabilities: (1) retrieval and rebirth, which repurposes existing trajectories into entirely new contexts without new motion data; and (2) prop-free teleoperation, where operators manipulate empty air and the model hallucinates the target objects and scene afterwards, eliminating reset time. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirements across diverse manipulation tasks.",
          "link": "https://arxiv.org/abs/2606.02577v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02577v1",
          "published": "2026-06-01T17:59:38Z",
          "updated": "2026-06-01T17:59:38Z",
          "authors": [
            "Junjie Ye",
            "Rong Xue",
            "Basile Van Hoorick",
            "Runhao Li",
            "Harshitha Rajaprakash",
            "Pavel Tokmakov",
            "Muhammad Zubair Irshad",
            "Vitor Guizilini"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 88,
          "importanceLevel": "A",
          "oneSentenceSummary": "RoboDream解耦轨迹与场景，合成逼真机器人数据。",
          "summaryCn": "RoboDream提出具身中心的世界模型，通过渲染机器人运动并条件化场景和物体先验，解耦轨迹执行与环境合成，生成包含新物体、新场景和新视角的光真演示数据。支持检索重生与无道具遥操作，显著减少现实收集成本，提升下游策略性能。实现可扩展的数据合成，降低机器人学习门槛。",
          "whyImportant": "突破物理可行的数据生成，降低数据成本并提升规模化。",
          "reasonTags": [
            "世界模型",
            "数据合成",
            "机器人操纵",
            "具身智能"
          ],
          "innovationPoints": [
            "具身中心生成解耦轨迹与环境",
            "检索重生与无道具遥操作",
            "光真合成提升策略性能"
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
          "score": 85,
          "importanceLevel": "A",
          "oneSentenceSummary": "FATE-VLA主动挖掘VLA失败，暴露稳健性风险。",
          "summaryCn": "FATE-VLA将VLA评估重构为主动失败发现，提出失败感知测试生成方法，结合多样性探索与从执行中学习的替代模型，引导测试向高风险区域，发现更多失败和多样失败模式。在四个最先进VLA模型上，成功率大幅下降。呼吁VLA评估从被动测量转向主动失败搜索。",
          "whyImportant": "重塑VLA评估范式，提前揭示模型弱点，保障部署安全。",
          "reasonTags": [
            "VLA评估",
            "失败发现",
            "测试生成",
            "安全性"
          ],
          "innovationPoints": [
            "主动失败感知测试生成",
            "替代模型引导高风险搜索",
            "揭示隐藏的多样化失败模式"
          ]
        },
        {
          "id": "2606.02105v1",
          "title": "Multimodal Action Diffusion for Robust End-to-End Autonomous Driving",
          "summary": "End-to-End Autonomous Driving (E2E-AD) systems have largely converged on predicting intermediate trajectory waypoints, delegating final control to hand-crafted controllers with GPS access. ADT surpasses previous state-of-the-art on the challenging closed-loop Bench2Drive benchmark while achieving ten times lower latency, demonstrating th…",
          "summaryRaw": "End-to-End Autonomous Driving (E2E-AD) systems have largely converged on predicting intermediate trajectory waypoints, delegating final control to hand-crafted controllers with GPS access. Direct control-signal prediction (outputting throttle, steer and brake in an end-to-end fashion) remains underexplored, and critically, the role of action multimodality in such systems is not well understood. We argue that moving beyond deterministic, single-action outputs is not merely a modelling choice, but a key driver of driving performance, representational quality, and training stability. To validate this, we introduce the Action Diffusion Transformer (ADT), an anchor-free diffusion transformer trained with a MSE objective that natively models the multimodal distribution of plausible driving actions. Rather than committing to a single deterministic command, ADT generates K action candidates and selects the most suitable one at inference via Nearest Neighbour Matching (NNM). Beyond strong benchmark numbers, we show that action multimodality yields measurable benefits in learned representations and behavioral consistency, effects that deterministic architectures cannot replicate. ADT surpasses previous state-of-the-art on the challenging closed-loop Bench2Drive benchmark while achieving ten times lower latency, demonstrating that expressive, multimodal action modelling is both practically efficient and conceptually essential for robust end-to-end driving.",
          "link": "https://arxiv.org/abs/2606.02105v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02105v1",
          "published": "2026-06-01T11:35:35Z",
          "updated": "2026-06-01T11:35:35Z",
          "authors": [
            "Jorge Daniel Rodríguez-Vidal",
            "Diego Porres",
            "Gabriel Villalonga Pineda",
            "Antonio M. López Peña"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 85,
          "importanceLevel": "A",
          "oneSentenceSummary": "多模态动作扩散实现端到端驾驶直接控制。",
          "summaryCn": "本文提出动作扩散Transformer (ADT)，直接生成油门、转向、刹车等多模态动作分布，通过最近邻匹配选取最优动作，实现端到端自动驾驶控制。在Bench2Drive封闭环上超越先前SOTA，延迟降低十倍，证明动作多模态对驾驶性能与表征的关键作用。推动端到端驾驶迈向直接控制。",
          "whyImportant": "推动端到端驾驶抛弃中间迹点，实现高性能直接控制。",
          "reasonTags": [
            "端到端驾驶",
            "动作扩散",
            "多模态",
            "自动驾驶"
          ],
          "innovationPoints": [
            "多模态动作扩散直接输出控制信号",
            "最近邻匹配选择最优动作",
            "极低延迟与强表现"
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
          "score": 82,
          "importanceLevel": "A",
          "oneSentenceSummary": "RoboTrustBench评测视频世界模型可信度。",
          "summaryCn": "RoboTrustBench基于DROID真实数据构建视频世界模型可信度基准，含正常、约束敏感、反事实、对抗四场景，1207个专家标注和13项细粒度标准。评估七个模型发现视觉连贯但约束推理、物理交互差。为机器人视频世界模型提供安全诊断工具。",
          "whyImportant": "首创视频世界模型可信度基准，确保机器人安全建模。",
          "reasonTags": [
            "视频世界模型",
            "可信性",
            "基准",
            "机器人"
          ],
          "innovationPoints": [
            "四场景可信度评测框架",
            "13维细粒度评估",
            "揭示物理推理缺陷"
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
          "score": 80,
          "importanceLevel": "A",
          "oneSentenceSummary": "PillarDETR融合YOLO和RT-DETR实时3D检测。",
          "summaryCn": "PillarDETR创新性地将YOLOv8的跨阶段部分网络作为LiDAR伪图像骨干，并采用RT-DETR的实时检测头，摒弃锚框与NMS，在KITTI和nuScenes上实现了领先的精度与低延迟，为自动驾驶3D感知提供了轻量高效方案。",
          "whyImportant": "提供轻量高效的3D检测方案，适合自动驾驶部署。",
          "reasonTags": [
            "3D检测",
            "实时",
            "自动驾驶",
            "点云"
          ],
          "innovationPoints": [
            "YOLOv8+CSP骨干融合",
            "RT-DETR头无NMS检测",
            "精度-延迟平衡"
          ]
        },
        {
          "id": "2606.01935v1",
          "title": "Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning",
          "summary": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model.",
          "summaryRaw": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. However, most tokenizers are inherited from image generation and are optimized mainly for pixel reconstruction, which may leave a gap between what is easy to generate and what is useful to decode for driving decisions. We present a representation-guided and geometry-enhanced tokenizer that learns discrete tokens under joint supervision. The tokenizer aligns its discrete bottleneck with a frozen DINO feature space through feature decoding, while preserving appearance via RGB reconstruction with perceptual and adversarial losses. To inject geometric state-related cues, we add adjacent-frame depth and relative-pose supervision during training and stabilize joint objectives with multi-codebook quantization. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model. Experiments on NAVSIM show improved reconstruction fidelity and representation consistency, competitive planning performance under a fixed decoder, and better generative quality under matched settings.",
          "link": "https://arxiv.org/abs/2606.01935v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01935v1",
          "published": "2026-06-01T09:02:32Z",
          "updated": "2026-06-01T09:02:32Z",
          "authors": [
            "Ziyang Yao",
            "Zeyu Zhu",
            "YunCheng Jiang",
            "Zibin Guo",
            "Huijing Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 78,
          "importanceLevel": "B",
          "oneSentenceSummary": "统一驾驶令牌联合表征与几何引导提升世界模型。",
          "summaryCn": "本文提出表征引导与几何增强的离散分词器，对齐DINO特征空间并保留外观，引入相邻帧深度和相对姿态监督，联合多码本量化。生成的令牌同时用于轻量规划和GPT风格世界模型，在NAVSIM上提升重建与生成性能，为驾驶世界模型紧凑令牌提供新方案。",
          "whyImportant": "为驾驶世界模型开发紧凑有用令牌，统一生成与规划。",
          "reasonTags": [
            "驾驶世界模型",
            "离散分词器",
            "表征学习",
            "规划"
          ],
          "innovationPoints": [
            "联合特征与外观监督的令牌学习",
            "几何状态注入（深度、姿态）",
            "多码本量化稳定训练"
          ]
        }
      ],
      "paperSets": {
        "overall": [
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
            "score": 95,
            "importanceLevel": "S",
            "oneSentenceSummary": "WALL-WM以事件为单位预训练世界动作模型，统一VLA学习。",
            "summaryCn": "WALL-WM提出以语义事件为原子单元的世界动作模型预训练方法，摒弃固定长度块限制，通过事件级数据标注与聚类采样构建数据生态，支持事件模式与统一模式双推理，在大规模真实场景泛化评估中达到最新性能，显著提升跨任务泛化，为VLA通用世界模型提供可扩展方案。",
            "whyImportant": "根本解决VLA训练的粒度不匹配，提供通用世界动作模型扩展方案。",
            "reasonTags": [
              "世界动作模型",
              "事件预训练",
              "VLA",
              "数据生态"
            ],
            "innovationPoints": [
              "事件级VLA预训练框架",
              "双模式推理：事件模式与统一模式",
              "大规模实际泛化评估"
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
            "score": 92,
            "importanceLevel": "S",
            "oneSentenceSummary": "Lie Diffuser Actor在SE(3)上进行扩散，根治欧几里得谬误。",
            "summaryCn": "扩散VLA将SE(3)姿态视为R^12向量，导致流形漂移、等变性缺失。本文提出Lie Diffuser Actor，在SE(3)切空间进行分数匹配，通过左不变SDE和指数映射生成动作，确保等变性与测地最优。为VLA几何表示提供正确范式，实验在CALVIN和真实机器人操纵中显著优于基线。",
            "whyImportant": "从几何底层修正VLA表示错误，提升操纵精度与鲁棒性。",
            "reasonTags": [
              "SE(3)扩散",
              "几何纠偏",
              "VLA",
              "机器人操纵"
            ],
            "innovationPoints": [
              "SE(3)内在扩散生成",
              "左不变SDE与切线分数",
              "测地轨迹保证"
            ]
          },
          {
            "id": "2606.02486v1",
            "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
            "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow.",
            "summaryRaw": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow. A language-and-motion saliency mask concentrates prediction on task-relevant patches, and the model rolls forward for an adaptive horizon, halting when prediction uncertainty crosses a threshold. The frozen action decoder then receives the predicted future tokens in place of the current ones. AHEAD adds 4.9M parameters to a frozen 7B OpenVLA and reaches 79 to 97% success across 20 dynamic simulation scenarios where the strongest baseline reaches 31 to 58%. On a physical UFactory xArm 7, AHEAD succeeds on 29/30 to 30/30 on three conveyor and rolling-ball tasks, 23/30 on paddle interception, and 19/30 on projectile catching where every baseline scores 0/30.",
            "link": "https://arxiv.org/abs/2606.02486v1",
            "pdfLink": "https://arxiv.org/pdf/2606.02486v1",
            "published": "2026-06-01T16:55:38Z",
            "updated": "2026-06-01T16:55:38Z",
            "authors": [
              "Shahram Najam Syed",
              "Arthur Jakobsson",
              "Haoran Hao",
              "Jeffrey Ichnowski"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 90,
            "importanceLevel": "S",
            "oneSentenceSummary": "AHEAD冻结VLA上加装运动世界模型实现动态操作。",
            "summaryCn": "AHEAD为静态VLA模型加装运动感知潜在世界模型，利用光流估计速度和加速度，预测VLA特征空间中的未来patch tokens，自适应滚动至不确定性阈值，再将预测特征输入冻结的动作解码器。在物理臂上实现传送带抓取、飞球拦截等动态任务，成功率达29/30-30/30，而基线全失败，显著提升动态操作能力。",
            "whyImportant": "使静态VLA零修改适应动态场景，极低参数开销实现高效抓取。",
            "reasonTags": [
              "动态VLA",
              "预测世界模型",
              "机器人",
              "光流"
            ],
            "innovationPoints": [
              "冻结VLA上的潜在世界模型",
              "光流驱动的patch token预测",
              "自适应不确定性滚动"
            ]
          },
          {
            "id": "2606.02551v1",
            "title": "AFUN: Towards an Affordance Foundation Model for Functionality Understanding",
            "summary": "Affordance understanding bridges visual perception and physical action, serving as an explainable interface for robot manipulation in open and unstructured real-world environments. ourmodel can be deployed for real-world robot manipulation without finetuning for robot embodiment or using task-specific heuristics, demonstrating the abilit…",
            "summaryRaw": "Affordance understanding bridges visual perception and physical action, serving as an explainable interface for robot manipulation in open and unstructured real-world environments. Yet, building an affordance foundation model that not only understands where and how the interaction should happen, but also generalizes across diverse environments, objects, and tasks, remains a long-standing research challenge. Existing methods typically address only part of this challenge, either localizing task-relevant regions without specifying executable motion, or predicting motion but with limited scalability. In this paper, we present ourmodel, a step towards an affordance foundation model for functionality understanding. From a single RGB-D observation and a language task description, ourmodel predicts a task-conditional functional mask (where to interact) and a 3D post-contact motion curve (how to interact). To support open-world generalization, we build a large-scale standardized data pipeline that converts heterogeneous robot, human, simulation, and real-world scan data into a shared affordance schema with language, masks, and object-centric 3D motion labels. We evaluate ourmodel from three aspects: for affordance segmentation, ourmodel outperforms all baselines by a large margin across 8 test sets from 4 benchmarks, improving mean gIoU/cIoU by +23.9/+26.3; for contact-point prediction, it predicts substantially more accurate points, with a 12.7--61.3% hit-rate gain over the best baseline; and for 3D motion, it achieves the best performance on all three test sets. ourmodel can be deployed for real-world robot manipulation without finetuning for robot embodiment or using task-specific heuristics, demonstrating the ability to adapt to open-world affordance tasks. Project page: https://www.zhaoningwang.com/AFUN",
            "link": "https://arxiv.org/abs/2606.02551v1",
            "pdfLink": "https://arxiv.org/pdf/2606.02551v1",
            "published": "2026-06-01T17:50:16Z",
            "updated": "2026-06-01T17:50:16Z",
            "authors": [
              "Zhaoning Wang",
              "Yi Zhong",
              "Jiawei Fu",
              "Henrik I. Christensen",
              "Jun Gao"
            ],
            "categories": [
              "cs.CV",
              "cs.RO"
            ],
            "score": 90,
            "importanceLevel": "A",
            "oneSentenceSummary": "AFUN供能基础模型理解交互位置与3D动作。",
            "summaryCn": "AFUN为通用可供性基础模型，从单张RGB-D和语言指令预测任务条件的功能掩码与3D后接触运动曲线。构建大规模标准化数据管道转换异构数据。在多个基准上大幅度超越现有方法，可零样本部署至真实机器人，实现开放世界操作。统一位置与动作预测，提供可解释交互接口。",
            "whyImportant": "统一语言、视觉与动作，提供可泛化的可供性基础模型。",
            "reasonTags": [
              "可供性基础模型",
              "机器人操作",
              "3D运动",
              "数据标准化"
            ],
            "innovationPoints": [
              "任务条件功能掩码与3D运动联合预测",
              "跨源数据标准化管道",
              "零样本真实世界部署"
            ]
          },
          {
            "id": "2606.02577v1",
            "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
            "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirem…",
            "summaryRaw": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmentation, or suffer from embodiment hallucinations that yield physically infeasible motions. We present a generalizable embodiment-centric world model that achieves scalable data generation by synthesizing photorealistic demonstrations with novel objects, in novel scenes, and from novel viewpoints. Our approach anchors generation to rendered robot motion while conditioning on explicit scene and object priors, effectively decoupling trajectory execution from environment synthesis. This formulation has the potential to unlock two powerful data scaling capabilities: (1) retrieval and rebirth, which repurposes existing trajectories into entirely new contexts without new motion data; and (2) prop-free teleoperation, where operators manipulate empty air and the model hallucinates the target objects and scene afterwards, eliminating reset time. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirements across diverse manipulation tasks.",
            "link": "https://arxiv.org/abs/2606.02577v1",
            "pdfLink": "https://arxiv.org/pdf/2606.02577v1",
            "published": "2026-06-01T17:59:38Z",
            "updated": "2026-06-01T17:59:38Z",
            "authors": [
              "Junjie Ye",
              "Rong Xue",
              "Basile Van Hoorick",
              "Runhao Li",
              "Harshitha Rajaprakash",
              "Pavel Tokmakov",
              "Muhammad Zubair Irshad",
              "Vitor Guizilini"
            ],
            "categories": [
              "cs.CV",
              "cs.RO"
            ],
            "score": 88,
            "importanceLevel": "A",
            "oneSentenceSummary": "RoboDream解耦轨迹与场景，合成逼真机器人数据。",
            "summaryCn": "RoboDream提出具身中心的世界模型，通过渲染机器人运动并条件化场景和物体先验，解耦轨迹执行与环境合成，生成包含新物体、新场景和新视角的光真演示数据。支持检索重生与无道具遥操作，显著减少现实收集成本，提升下游策略性能。实现可扩展的数据合成，降低机器人学习门槛。",
            "whyImportant": "突破物理可行的数据生成，降低数据成本并提升规模化。",
            "reasonTags": [
              "世界模型",
              "数据合成",
              "机器人操纵",
              "具身智能"
            ],
            "innovationPoints": [
              "具身中心生成解耦轨迹与环境",
              "检索重生与无道具遥操作",
              "光真合成提升策略性能"
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
            "score": 85,
            "importanceLevel": "A",
            "oneSentenceSummary": "FATE-VLA主动挖掘VLA失败，暴露稳健性风险。",
            "summaryCn": "FATE-VLA将VLA评估重构为主动失败发现，提出失败感知测试生成方法，结合多样性探索与从执行中学习的替代模型，引导测试向高风险区域，发现更多失败和多样失败模式。在四个最先进VLA模型上，成功率大幅下降。呼吁VLA评估从被动测量转向主动失败搜索。",
            "whyImportant": "重塑VLA评估范式，提前揭示模型弱点，保障部署安全。",
            "reasonTags": [
              "VLA评估",
              "失败发现",
              "测试生成",
              "安全性"
            ],
            "innovationPoints": [
              "主动失败感知测试生成",
              "替代模型引导高风险搜索",
              "揭示隐藏的多样化失败模式"
            ]
          },
          {
            "id": "2606.02105v1",
            "title": "Multimodal Action Diffusion for Robust End-to-End Autonomous Driving",
            "summary": "End-to-End Autonomous Driving (E2E-AD) systems have largely converged on predicting intermediate trajectory waypoints, delegating final control to hand-crafted controllers with GPS access. ADT surpasses previous state-of-the-art on the challenging closed-loop Bench2Drive benchmark while achieving ten times lower latency, demonstrating th…",
            "summaryRaw": "End-to-End Autonomous Driving (E2E-AD) systems have largely converged on predicting intermediate trajectory waypoints, delegating final control to hand-crafted controllers with GPS access. Direct control-signal prediction (outputting throttle, steer and brake in an end-to-end fashion) remains underexplored, and critically, the role of action multimodality in such systems is not well understood. We argue that moving beyond deterministic, single-action outputs is not merely a modelling choice, but a key driver of driving performance, representational quality, and training stability. To validate this, we introduce the Action Diffusion Transformer (ADT), an anchor-free diffusion transformer trained with a MSE objective that natively models the multimodal distribution of plausible driving actions. Rather than committing to a single deterministic command, ADT generates K action candidates and selects the most suitable one at inference via Nearest Neighbour Matching (NNM). Beyond strong benchmark numbers, we show that action multimodality yields measurable benefits in learned representations and behavioral consistency, effects that deterministic architectures cannot replicate. ADT surpasses previous state-of-the-art on the challenging closed-loop Bench2Drive benchmark while achieving ten times lower latency, demonstrating that expressive, multimodal action modelling is both practically efficient and conceptually essential for robust end-to-end driving.",
            "link": "https://arxiv.org/abs/2606.02105v1",
            "pdfLink": "https://arxiv.org/pdf/2606.02105v1",
            "published": "2026-06-01T11:35:35Z",
            "updated": "2026-06-01T11:35:35Z",
            "authors": [
              "Jorge Daniel Rodríguez-Vidal",
              "Diego Porres",
              "Gabriel Villalonga Pineda",
              "Antonio M. López Peña"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 85,
            "importanceLevel": "A",
            "oneSentenceSummary": "多模态动作扩散实现端到端驾驶直接控制。",
            "summaryCn": "本文提出动作扩散Transformer (ADT)，直接生成油门、转向、刹车等多模态动作分布，通过最近邻匹配选取最优动作，实现端到端自动驾驶控制。在Bench2Drive封闭环上超越先前SOTA，延迟降低十倍，证明动作多模态对驾驶性能与表征的关键作用。推动端到端驾驶迈向直接控制。",
            "whyImportant": "推动端到端驾驶抛弃中间迹点，实现高性能直接控制。",
            "reasonTags": [
              "端到端驾驶",
              "动作扩散",
              "多模态",
              "自动驾驶"
            ],
            "innovationPoints": [
              "多模态动作扩散直接输出控制信号",
              "最近邻匹配选择最优动作",
              "极低延迟与强表现"
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
            "score": 82,
            "importanceLevel": "A",
            "oneSentenceSummary": "RoboTrustBench评测视频世界模型可信度。",
            "summaryCn": "RoboTrustBench基于DROID真实数据构建视频世界模型可信度基准，含正常、约束敏感、反事实、对抗四场景，1207个专家标注和13项细粒度标准。评估七个模型发现视觉连贯但约束推理、物理交互差。为机器人视频世界模型提供安全诊断工具。",
            "whyImportant": "首创视频世界模型可信度基准，确保机器人安全建模。",
            "reasonTags": [
              "视频世界模型",
              "可信性",
              "基准",
              "机器人"
            ],
            "innovationPoints": [
              "四场景可信度评测框架",
              "13维细粒度评估",
              "揭示物理推理缺陷"
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
            "score": 80,
            "importanceLevel": "A",
            "oneSentenceSummary": "PillarDETR融合YOLO和RT-DETR实时3D检测。",
            "summaryCn": "PillarDETR创新性地将YOLOv8的跨阶段部分网络作为LiDAR伪图像骨干，并采用RT-DETR的实时检测头，摒弃锚框与NMS，在KITTI和nuScenes上实现了领先的精度与低延迟，为自动驾驶3D感知提供了轻量高效方案。",
            "whyImportant": "提供轻量高效的3D检测方案，适合自动驾驶部署。",
            "reasonTags": [
              "3D检测",
              "实时",
              "自动驾驶",
              "点云"
            ],
            "innovationPoints": [
              "YOLOv8+CSP骨干融合",
              "RT-DETR头无NMS检测",
              "精度-延迟平衡"
            ]
          },
          {
            "id": "2606.01935v1",
            "title": "Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning",
            "summary": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model.",
            "summaryRaw": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. However, most tokenizers are inherited from image generation and are optimized mainly for pixel reconstruction, which may leave a gap between what is easy to generate and what is useful to decode for driving decisions. We present a representation-guided and geometry-enhanced tokenizer that learns discrete tokens under joint supervision. The tokenizer aligns its discrete bottleneck with a frozen DINO feature space through feature decoding, while preserving appearance via RGB reconstruction with perceptual and adversarial losses. To inject geometric state-related cues, we add adjacent-frame depth and relative-pose supervision during training and stabilize joint objectives with multi-codebook quantization. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model. Experiments on NAVSIM show improved reconstruction fidelity and representation consistency, competitive planning performance under a fixed decoder, and better generative quality under matched settings.",
            "link": "https://arxiv.org/abs/2606.01935v1",
            "pdfLink": "https://arxiv.org/pdf/2606.01935v1",
            "published": "2026-06-01T09:02:32Z",
            "updated": "2026-06-01T09:02:32Z",
            "authors": [
              "Ziyang Yao",
              "Zeyu Zhu",
              "YunCheng Jiang",
              "Zibin Guo",
              "Huijing Zhao"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 78,
            "importanceLevel": "B",
            "oneSentenceSummary": "统一驾驶令牌联合表征与几何引导提升世界模型。",
            "summaryCn": "本文提出表征引导与几何增强的离散分词器，对齐DINO特征空间并保留外观，引入相邻帧深度和相对姿态监督，联合多码本量化。生成的令牌同时用于轻量规划和GPT风格世界模型，在NAVSIM上提升重建与生成性能，为驾驶世界模型紧凑令牌提供新方案。",
            "whyImportant": "为驾驶世界模型开发紧凑有用令牌，统一生成与规划。",
            "reasonTags": [
              "驾驶世界模型",
              "离散分词器",
              "表征学习",
              "规划"
            ],
            "innovationPoints": [
              "联合特征与外观监督的令牌学习",
              "几何状态注入（深度、姿态）",
              "多码本量化稳定训练"
            ]
          }
        ],
        "vla": [
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
            "score": 100,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 81,
              "novelty": 5,
              "impact": 15,
              "practicality": 7,
              "coreAlignment": 40
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geomet…",
            "whyImportant": "命中VLA、机器人、真实实验主题，分类覆盖cs.LG / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
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
            "score": 94,
            "importanceLevel": "S",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 49,
              "novelty": 24,
              "impact": 30,
              "practicality": 0,
              "coreAlignment": 29
            },
            "oneSentenceSummary": "该论文是偏VLA/WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language…",
            "whyImportant": "命中VLA、WAM、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "新基准",
              "通用框架"
            ],
            "innovationPoints": [
              "涉及新的训练或预训练范式",
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "创新信号强，像是带新范式或新基准的工作。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Both方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
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
            "score": 86,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 62,
              "novelty": 10,
              "impact": 11,
              "practicality": 9,
              "coreAlignment": 34
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely o…",
            "whyImportant": "命中VLA、机器人、新基准、通用框架主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "新基准",
              "通用框架"
            ],
            "innovationPoints": [
              "包含新基准或新数据评测"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2606.02486v1",
            "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
            "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow.",
            "summaryRaw": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow. A language-and-motion saliency mask concentrates prediction on task-relevant patches, and the model rolls forward for an adaptive horizon, halting when prediction uncertainty crosses a threshold. The frozen action decoder then receives the predicted future tokens in place of the current ones. AHEAD adds 4.9M parameters to a frozen 7B OpenVLA and reaches 79 to 97% success across 20 dynamic simulation scenarios where the strongest baseline reaches 31 to 58%. On a physical UFactory xArm 7, AHEAD succeeds on 29/30 to 30/30 on three conveyor and rolling-ball tasks, 23/30 on paddle interception, and 19/30 on projectile catching where every baseline scores 0/30.",
            "link": "https://arxiv.org/abs/2606.02486v1",
            "pdfLink": "https://arxiv.org/pdf/2606.02486v1",
            "published": "2026-06-01T16:55:38Z",
            "updated": "2026-06-01T16:55:38Z",
            "authors": [
              "Shahram Najam Syed",
              "Arthur Jakobsson",
              "Haoran Hao",
              "Jeffrey Ichnowski"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 65,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 53,
              "novelty": 6,
              "impact": 9,
              "practicality": 3,
              "coreAlignment": 33
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution.",
            "whyImportant": "命中VLA、WAM、机器人主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "机器人"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          }
        ],
        "wam": [
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
            "score": 90,
            "importanceLevel": "S",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 70,
              "novelty": 10,
              "impact": 15,
              "practicality": 4,
              "coreAlignment": 35
            },
            "oneSentenceSummary": "该论文是偏WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasibl…",
            "whyImportant": "命中WAM、机器人、新基准、真实实验主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "WAM",
              "机器人",
              "新基准",
              "真实实验"
            ],
            "innovationPoints": [
              "包含新基准或新数据评测",
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在WAM方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
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
            "score": 94,
            "importanceLevel": "S",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 49,
              "novelty": 24,
              "impact": 30,
              "practicality": 0,
              "coreAlignment": 29
            },
            "oneSentenceSummary": "该论文是偏VLA/WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language…",
            "whyImportant": "命中VLA、WAM、新基准、通用框架主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "新基准",
              "通用框架"
            ],
            "innovationPoints": [
              "涉及新的训练或预训练范式",
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "创新信号强，像是带新范式或新基准的工作。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Both方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2606.02486v1",
            "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
            "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow.",
            "summaryRaw": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow. A language-and-motion saliency mask concentrates prediction on task-relevant patches, and the model rolls forward for an adaptive horizon, halting when prediction uncertainty crosses a threshold. The frozen action decoder then receives the predicted future tokens in place of the current ones. AHEAD adds 4.9M parameters to a frozen 7B OpenVLA and reaches 79 to 97% success across 20 dynamic simulation scenarios where the strongest baseline reaches 31 to 58%. On a physical UFactory xArm 7, AHEAD succeeds on 29/30 to 30/30 on three conveyor and rolling-ball tasks, 23/30 on paddle interception, and 19/30 on projectile catching where every baseline scores 0/30.",
            "link": "https://arxiv.org/abs/2606.02486v1",
            "pdfLink": "https://arxiv.org/pdf/2606.02486v1",
            "published": "2026-06-01T16:55:38Z",
            "updated": "2026-06-01T16:55:38Z",
            "authors": [
              "Shahram Najam Syed",
              "Arthur Jakobsson",
              "Haoran Hao",
              "Jeffrey Ichnowski"
            ],
            "categories": [
              "cs.RO"
            ],
            "score": 65,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 53,
              "novelty": 6,
              "impact": 9,
              "practicality": 3,
              "coreAlignment": 33
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution.",
            "whyImportant": "命中VLA、WAM、机器人主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "机器人"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2606.02577v1",
            "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
            "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirem…",
            "summaryRaw": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmentation, or suffer from embodiment hallucinations that yield physically infeasible motions. We present a generalizable embodiment-centric world model that achieves scalable data generation by synthesizing photorealistic demonstrations with novel objects, in novel scenes, and from novel viewpoints. Our approach anchors generation to rendered robot motion while conditioning on explicit scene and object priors, effectively decoupling trajectory execution from environment synthesis. This formulation has the potential to unlock two powerful data scaling capabilities: (1) retrieval and rebirth, which repurposes existing trajectories into entirely new contexts without new motion data; and (2) prop-free teleoperation, where operators manipulate empty air and the model hallucinates the target objects and scene afterwards, eliminating reset time. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirements across diverse manipulation tasks.",
            "link": "https://arxiv.org/abs/2606.02577v1",
            "pdfLink": "https://arxiv.org/pdf/2606.02577v1",
            "published": "2026-06-01T17:59:38Z",
            "updated": "2026-06-01T17:59:38Z",
            "authors": [
              "Junjie Ye",
              "Rong Xue",
              "Basile Van Hoorick",
              "Runhao Li",
              "Harshitha Rajaprakash",
              "Pavel Tokmakov",
              "Muhammad Zubair Irshad",
              "Vitor Guizilini"
            ],
            "categories": [
              "cs.CV",
              "cs.RO"
            ],
            "score": 62,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 45,
              "novelty": 6,
              "impact": 20,
              "practicality": 0,
              "coreAlignment": 25
            },
            "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohi…",
            "whyImportant": "命中WAM、机器人、真实实验主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "WAM",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2606.01935v1",
            "title": "Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning",
            "summary": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model.",
            "summaryRaw": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. However, most tokenizers are inherited from image generation and are optimized mainly for pixel reconstruction, which may leave a gap between what is easy to generate and what is useful to decode for driving decisions. We present a representation-guided and geometry-enhanced tokenizer that learns discrete tokens under joint supervision. The tokenizer aligns its discrete bottleneck with a frozen DINO feature space through feature decoding, while preserving appearance via RGB reconstruction with perceptual and adversarial losses. To inject geometric state-related cues, we add adjacent-frame depth and relative-pose supervision during training and stabilize joint objectives with multi-codebook quantization. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model. Experiments on NAVSIM show improved reconstruction fidelity and representation consistency, competitive planning performance under a fixed decoder, and better generative quality under matched settings.",
            "link": "https://arxiv.org/abs/2606.01935v1",
            "pdfLink": "https://arxiv.org/pdf/2606.01935v1",
            "published": "2026-06-01T09:02:32Z",
            "updated": "2026-06-01T09:02:32Z",
            "authors": [
              "Ziyang Yao",
              "Zeyu Zhu",
              "YunCheng Jiang",
              "Zibin Guo",
              "Huijing Zhao"
            ],
            "categories": [
              "cs.CV"
            ],
            "score": 51,
            "importanceLevel": "A",
            "lane": "Robotics",
            "dimensionScores": {
              "relevance": 35,
              "novelty": 10,
              "impact": 6,
              "practicality": 3,
              "coreAlignment": 19
            },
            "oneSentenceSummary": "该论文是偏机器人的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous drivi…",
            "whyImportant": "命中WAM、自动驾驶、通用框架主题，分类覆盖cs.CV，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "WAM",
              "自动驾驶",
              "通用框架"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Robotics方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          }
        ]
      },
      "dailyBrief": {
        "overall": "今日总榜优先覆盖最新且高影响潜力的 VLA/WAM/机器人论文，共筛出 10 篇。",
        "vla": "VLA 榜更强调通用策略、语言条件动作与具身控制，当前聚焦 4 篇。",
        "wam": "WAM 榜更强调世界模型、事件级建模与动作预测，当前聚焦 5 篇。",
        "retrieval": "当前采用宽召回检索，再由多维评分进行重排与去重复判断。"
      }
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
      ],
      "paperSets": {
        "overall": [
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
        ],
        "vla": [
          {
            "id": "2605.30280v1",
            "title": "Qwen-VLA: Unifying Vision-Language-Action Modeling across Tasks, Environments, and Robot Embodiments",
            "summary": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
            "summaryRaw": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
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
            "score": 93,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 77,
              "novelty": 11,
              "impact": 14,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resultin…",
            "whyImportant": "命中VLA、机器人主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人"
            ],
            "innovationPoints": [
              "涉及新的训练或预训练范式"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.31286v1",
            "title": "DeMaVLA: A Vision-Language-Action Foundation Model for Generalizable Deformable Manipulation",
            "summary": "Real-world household robots require Vision-Language-Action (VLA) foundation models that can acquire reusable manipulation skills across diverse objects, task conditions, and household environments. Experiments show that DeMaVLA achieves competitive performance on RoboTwin and strong real-world results on our household folding benchmark.",
            "summaryRaw": "Real-world household robots require Vision-Language-Action (VLA) foundation models that can acquire reusable manipulation skills across diverse objects, task conditions, and household environments. Experiments show that DeMaVLA achieves competitive performance on RoboTwin and strong real-world results on our household folding benchmark.",
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
            "score": 83,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 65,
              "novelty": 12,
              "impact": 15,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Real-world household robots require Vision-Language-Action (VLA) foundation models that can acquire reusable manipulation skills ac…",
            "whyImportant": "命中VLA、机器人、新基准、通用框架主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "新基准",
              "通用框架"
            ],
            "innovationPoints": [
              "包含新基准或新数据评测",
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.30226v1",
            "title": "BORA: Bridging Offline Reinforcement Learning and Online Residual Adaptation for Real-World Dexterous VLA Models",
            "summary": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
            "summaryRaw": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
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
            "score": 82,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 74,
              "novelty": 2,
              "impact": 15,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-worl…",
            "whyImportant": "命中VLA、机器人、真实实验主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.25829v1",
            "title": "OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation",
            "summary": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
            "summaryRaw": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
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
            "score": 80,
            "importanceLevel": "S",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 74,
              "novelty": 0,
              "impact": 15,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA/WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate re…",
            "whyImportant": "命中VLA、WAM、机器人、真实实验主题，分类覆盖cs.RO / cs.AI，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Both方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.30484v1",
            "title": "ELAN4D: Embodiment-Centric 4D Supervision for Vision-Language-Action Models via Plug-and-Play Adaptation",
            "summary": "Vision-Language-Action (VLA) models have shown promise for robotic manipulation, yet most existing policies operate reactively by directly regressing actions from current observations, without explicitly modeling future dynamics. Extensive experiments on LIBERO, LIBERO-Plus, RoboTwin2.0 and real-world manipulation tasks demonstrate that…",
            "summaryRaw": "Vision-Language-Action (VLA) models have shown promise for robotic manipulation, yet most existing policies operate reactively by directly regressing actions from current observations, without explicitly modeling future dynamics. Extensive experiments on LIBERO, LIBERO-Plus, RoboTwin2.0 and real-world manipulation tasks demonstrate that…",
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
            "score": 79,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 71,
              "novelty": 2,
              "impact": 12,
              "practicality": 0,
              "coreAlignment": 34
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models have shown promise for robotic manipulation, yet most existing policies operate reactively by d…",
            "whyImportant": "命中VLA、机器人、真实实验主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.31041v1",
            "title": "Does Visual Information Play a Decisive Role in Vision-Language-Action Model Driving Behavior?",
            "summary": "Vision-Language-Action (VLA) models have demonstrated promising capability in autonomous driving, highlighting the potential of unified multimodal architectures for jointly modeling perception and planning. However, how current VLA-based driving behavior is grounded in visual information remains poorly understood.",
            "summaryRaw": "Vision-Language-Action (VLA) models have demonstrated promising capability in autonomous driving, highlighting the potential of unified multimodal architectures for jointly modeling perception and planning. However, how current VLA-based driving behavior is grounded in visual information remains poorly understood.",
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
            "score": 69,
            "importanceLevel": "A",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 62,
              "novelty": 7,
              "impact": 6,
              "practicality": 0,
              "coreAlignment": 34
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models have demonstrated promising capability in autonomous driving, highlighting the potential of uni…",
            "whyImportant": "命中VLA、自动驾驶、通用框架主题，分类覆盖cs.AI / cs.CV，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "自动驾驶",
              "通用框架"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          }
        ],
        "wam": [
          {
            "id": "2605.25829v1",
            "title": "OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation",
            "summary": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
            "summaryRaw": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
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
            "score": 80,
            "importanceLevel": "S",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 74,
              "novelty": 0,
              "impact": 15,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA/WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate re…",
            "whyImportant": "命中VLA、WAM、机器人、真实实验主题，分类覆盖cs.RO / cs.AI，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Both方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.27947v1",
            "title": "SANTS: A State-Adaptive Scheduler for World Action Models",
            "summary": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
            "summaryRaw": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
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
            "score": 46,
            "importanceLevel": "B",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 46,
              "novelty": 0,
              "impact": 6,
              "practicality": 0,
              "coreAlignment": 26
            },
            "oneSentenceSummary": "该论文是偏WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation.",
            "whyImportant": "命中WAM、机器人主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "WAM",
              "机器人"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在WAM方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          }
        ]
      },
      "dailyBrief": {
        "overall": "今日总榜优先覆盖最新且高影响潜力的 VLA/WAM/机器人论文，共筛出 20 篇。",
        "vla": "VLA 榜更强调通用策略、语言条件动作与具身控制，当前聚焦 6 篇。",
        "wam": "WAM 榜更强调世界模型、事件级建模与动作预测，当前聚焦 2 篇。",
        "retrieval": "当前采用宽召回检索，再由多维评分进行重排与去重复判断。"
      }
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
      ],
      "paperSets": {
        "overall": [
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
        ],
        "vla": [
          {
            "id": "2605.30280v1",
            "title": "Qwen-VLA: Unifying Vision-Language-Action Modeling across Tasks, Environments, and Robot Embodiments",
            "summary": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
            "summaryRaw": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
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
            "score": 93,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 77,
              "novelty": 11,
              "impact": 14,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resultin…",
            "whyImportant": "命中VLA、机器人主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人"
            ],
            "innovationPoints": [
              "涉及新的训练或预训练范式"
            ],
            "noveltyVerdict": "创新点清晰，属于值得重点跟进的增量改进。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.28548v1",
            "title": "GEM: Generative Supervision Helps Embodied Intelligence",
            "summary": "Embodied Vision-Language Models (VLMs) have demonstrated impressive performance and generalization in robotics, particularly within Vision-Language-Action frameworks. Furthermore, our deployed action model, GEM-VLA, exhibits vastly superior task execution abilities in both simulation environments and real-world evaluations.",
            "summaryRaw": "Embodied Vision-Language Models (VLMs) have demonstrated impressive performance and generalization in robotics, particularly within Vision-Language-Action frameworks. Furthermore, our deployed action model, GEM-VLA, exhibits vastly superior task execution abilities in both simulation environments and real-world evaluations.",
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
            "score": 87,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 77,
              "novelty": 4,
              "impact": 9,
              "practicality": 0,
              "coreAlignment": 31
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Embodied Vision-Language Models (VLMs) have demonstrated impressive performance and generalization in robotics, particularly within…",
            "whyImportant": "命中VLA、机器人、新基准、真实实验主题，分类覆盖cs.CV，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "新基准",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.29562v1",
            "title": "VLA-Pro: Cross-Task Procedural Memory Transfer for Vision-Language-Action Models",
            "summary": "Vision-Language-Action~(VLA) models have shown strong potential for general-purpose robotic manipulation, yet they still struggle to generalize to unseen tasks that necessitate transferring relevant experience across objects, scenes, and action patterns. Experiments on RoboTwin, RLBench, and real-world manipulation tasks show that VLA-Pr…",
            "summaryRaw": "Vision-Language-Action~(VLA) models have shown strong potential for general-purpose robotic manipulation, yet they still struggle to generalize to unseen tasks that necessitate transferring relevant experience across objects, scenes, and action patterns. Experiments on RoboTwin, RLBench, and real-world manipulation tasks show that VLA-Pr…",
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
            "score": 89,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 77,
              "novelty": 1,
              "impact": 23,
              "practicality": 0,
              "coreAlignment": 40
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action~(VLA) models have shown strong potential for general-purpose robotic manipulation, yet they still struggle t…",
            "whyImportant": "命中VLA、机器人、通用框架、真实实验主题，分类覆盖cs.AI / cs.CV，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "通用框架",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.30226v1",
            "title": "BORA: Bridging Offline Reinforcement Learning and Online Residual Adaptation for Real-World Dexterous VLA Models",
            "summary": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
            "summaryRaw": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
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
            "score": 82,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 74,
              "novelty": 2,
              "impact": 15,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-worl…",
            "whyImportant": "命中VLA、机器人、真实实验主题，分类覆盖cs.AI / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.28634v1",
            "title": "PrimitiveVLA: Learning Reusable Motion Primitives for Efficient and Generalizable Robotic Manipulation",
            "summary": "Vision-Language-Action (VLA) models offer a promising paradigm for generalist robotic policies, yet their adaptation is hindered by data inefficiency and poor generalization. We propose PrimitiveVLA, a framework that shifts this paradigm toward a Primitive-Centric Disassemble & Assemble paradigm.",
            "summaryRaw": "Vision-Language-Action (VLA) models offer a promising paradigm for generalist robotic policies, yet their adaptation is hindered by data inefficiency and poor generalization. We propose PrimitiveVLA, a framework that shifts this paradigm toward a Primitive-Centric Disassemble & Assemble paradigm.",
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
            "score": 80,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 71,
              "novelty": 5,
              "impact": 6,
              "practicality": 4,
              "coreAlignment": 34
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action (VLA) models offer a promising paradigm for generalist robotic policies, yet their adaptation is hindered by…",
            "whyImportant": "命中VLA、机器人、通用框架主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人",
              "通用框架"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.29416v1",
            "title": "3DVLA: Enhancing Vision-Language-Action Models via 3D Spatial and Instance Understanding",
            "summary": "Vision-Language-Action models have achieved remarkable progress in robotic manipulation, yet they suffer from a critical limitation: a lack of 3D scene understanding. We integrate 3DVLA with multiple VLA baselines and evaluate on LIBERO-Plus and RoboTwin 2.0.",
            "summaryRaw": "Vision-Language-Action models have achieved remarkable progress in robotic manipulation, yet they suffer from a critical limitation: a lack of 3D scene understanding. We integrate 3DVLA with multiple VLA baselines and evaluate on LIBERO-Plus and RoboTwin 2.0.",
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
            "score": 75,
            "importanceLevel": "S",
            "lane": "VLA",
            "dimensionScores": {
              "relevance": 74,
              "novelty": 1,
              "impact": 9,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Vision-Language-Action models have achieved remarkable progress in robotic manipulation, yet they suffer from a critical limitation…",
            "whyImportant": "命中VLA、机器人主题，分类覆盖cs.CV / cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "机器人"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在VLA方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          }
        ],
        "wam": [
          {
            "id": "2605.25829v1",
            "title": "OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation",
            "summary": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
            "summaryRaw": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
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
            "score": 80,
            "importanceLevel": "S",
            "lane": "Both",
            "dimensionScores": {
              "relevance": 74,
              "novelty": 0,
              "impact": 15,
              "practicality": 0,
              "coreAlignment": 37
            },
            "oneSentenceSummary": "该论文是偏VLA/WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate re…",
            "whyImportant": "命中VLA、WAM、机器人、真实实验主题，分类覆盖cs.RO / cs.AI，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "VLA",
              "WAM",
              "机器人",
              "真实实验"
            ],
            "innovationPoints": [
              "提供真实场景实验验证"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在Both方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          },
          {
            "id": "2605.27947v1",
            "title": "SANTS: A State-Adaptive Scheduler for World Action Models",
            "summary": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
            "summaryRaw": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
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
            "score": 46,
            "importanceLevel": "B",
            "lane": "WAM",
            "dimensionScores": {
              "relevance": 46,
              "novelty": 0,
              "impact": 6,
              "practicality": 0,
              "coreAlignment": 26
            },
            "oneSentenceSummary": "该论文是偏WAM的重点候选，值得优先阅读。",
            "summaryCn": "论文核心内容是：World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation.",
            "whyImportant": "命中WAM、机器人主题，分类覆盖cs.RO，并体现较强的新颖性与影响潜力。",
            "reasonTags": [
              "WAM",
              "机器人"
            ],
            "innovationPoints": [
              "提出具有跟踪价值的方法设计"
            ],
            "noveltyVerdict": "更偏实用推进型工作，适合结合上下文继续判断。",
            "duplicateRisk": "low",
            "dedupeNote": "该论文在WAM方向上具备独立问题设置或代表性贡献，可作为当日候选保留。",
            "retrievalGroups": [],
            "mergedCount": 1,
            "mergedTitles": []
          }
        ]
      },
      "dailyBrief": {
        "overall": "今日总榜优先覆盖最新且高影响潜力的 VLA/WAM/机器人论文，共筛出 20 篇。",
        "vla": "VLA 榜更强调通用策略、语言条件动作与具身控制，当前聚焦 6 篇。",
        "wam": "WAM 榜更强调世界模型、事件级建模与动作预测，当前聚焦 2 篇。",
        "retrieval": "当前采用宽召回检索，再由多维评分进行重排与去重复判断。"
      }
    }
  ]
};
