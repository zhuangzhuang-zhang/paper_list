window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-03T13:43:33.922278+00:00",
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
  "selectionMethod": "deepseek_rerank",
  "modelInfo": {
    "provider": "deepseek",
    "model": "deepseek-v4-pro",
    "candidateCount": 30
  },
  "batchWindow": {
    "start": "2026-06-02T08:00:00+08:00",
    "end": "2026-06-03T08:00:00+08:00"
  },
  "currentDateKey": "20260603",
  "papers": [
    {
      "id": "2606.03159v1",
      "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
      "summary": "Deployed in a closed-loop system with the Alpamayo 1 policy model and AlpaSim orchestrator, OmniDreams acts as a highly responsive, reactive environment, providing a scalable and comprehensive solution for training and evaluating next-generation autonomous driving policies. We additionally show preliminary results indicating that a world…",
      "summaryRaw": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to generalize to highly dynamic or novel scenes. To overcome these limitations, we introduce OmniDreams, a foundation generative world model mid- and post-trained from the Cosmos diffusion model to autoregressively generate action-conditioned videos in real time. By leveraging the rich visual priors of Cosmos and mid- and post-training on 21k hours of driving scenarios, OmniDreams synthesizes complex, unobserved phenomena that are hard for traditional simulators to capture, such as extreme weather and unpredictable dynamic agent behaviors. Crucially, it autoregressively conditions its photorealistic sensor generation on past frames, the current simulator state, and immediate driving actions. Deployed in a closed-loop system with the Alpamayo 1 policy model and AlpaSim orchestrator, OmniDreams acts as a highly responsive, reactive environment, providing a scalable and comprehensive solution for training and evaluating next-generation autonomous driving policies. We additionally show preliminary results indicating that a world-action model (WAM) post-trained from OmniDreams achieves strong performance on the Physical AI Autonomous Vehicles NuRec dataset, surpassing the VLA-based Alpamayo 1.5 research policy model while using only 1/5 the total parameters. These results highlight the potential for a real-time world model like OmniDreams to also serve as a backbone for policy architectures.",
      "link": "https://arxiv.org/abs/2606.03159v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03159v1",
      "published": "2026-06-02T05:11:05Z",
      "updated": "2026-06-02T05:11:05Z",
      "authors": [
        "NVIDIA",
        ":",
        "Aarti Basant",
        "Amlan Kar",
        "Despoina Paschalidou",
        "Fangyin Wei",
        "Francesco Ferroni",
        "Guillermo Garcia Cobo"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.RO"
      ],
      "score": 97,
      "importanceLevel": "S",
      "oneSentenceSummary": "OmniDreams：基于Cosmos扩散模型的实时生成式世界模型，用于自动驾驶闭环仿真。",
      "summaryCn": "OmniDreams是一个基础生成世界模型，以Cosmos扩散模型为骨干，在21k小时驾驶数据上中后训练，能够根据历史帧、仿真状态和驾驶动作自回归生成逼真视频。用于闭环仿真时，与Alpamayo 1策略模型配合，可模拟极端天气和动态agent行为。后训练的世界-动作模型（WAM）在NuRec数据集上以1/5参数量超过VLA基线，展现了作为策略骨干的潜力。",
      "whyImportant": "首个实时生成式世界动作模型用于自动驾驶闭环测评，兼具仿真与策略学习能力，规模与性能突出。",
      "reasonTags": [
        "世界动作模型",
        "自动驾驶仿真",
        "实时生成",
        "闭环"
      ],
      "innovationPoints": [
        "基于Cosmos扩散模型，首次实现实时自回归视频生成用于自动驾驶闭环仿真",
        "世界模型可后训练为世界-动作模型，参数量小但性能超越VLA策略",
        "模拟长尾场景（极端天气、动态agent），突破传统重建仿真器的局限"
      ]
    },
    {
      "id": "2606.03598v1",
      "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
      "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
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
      "score": 95,
      "importanceLevel": "S",
      "oneSentenceSummary": "PHASER：面向VLA模型的阶段感知语义经验回放持续学习框架。",
      "summaryCn": "PHASER是一种架构无关的持续学习框架，针对VLA模型在开放环境中的灾难性遗忘问题。它采用阶段中心的容量分配确保所有子技能获得均等记忆支持，并利用多模态干扰路由动态优先回放高风险历史阶段。还集成了自动阶段分割流水线Auto-PC，利用无监督动作变化点检测和VLM语义验证。在LIBERO持续学习套件上，PHASER将平均成功率提升高达31%，最终成功率87.8%。",
      "whyImportant": "解决VLA持续学习中的阶段匮乏和遗忘不均问题，大幅提升在线学习性能，无需架构修改。",
      "reasonTags": [
        "VLA持续学习",
        "经验回放",
        "阶段感知",
        "灾难性遗忘"
      ],
      "innovationPoints": [
        "阶段中心的容量分配避免对短暂关键子技能的采样不足",
        "多模态干扰路由根据遗忘风险动态调整回放优先级",
        "Auto-PC实现无监督的自动阶段分割，减少人工标注"
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
      "score": 94,
      "importanceLevel": "S",
      "oneSentenceSummary": "ERVLA：利用具身思维链作为表示塑造监督的VLA模型，避免自回归推理不稳定。",
      "summaryCn": "ERVLA构建了最大的具身思维链语料库，发现有效的思维链应将高层语义理解落地为具体动作引导，如末端执行器运动和图像空间轨迹。提出将思维链作为训练时表示塑造监督，而非测试时必须的推理前缀，通过推理丢弃策略避免自回归耦合错误。ERVLA在LIBERO-Plus上达86.9%成功率，VLABench上53.2%，真实机器人实验中表现优于同规模基线。",
      "whyImportant": "大规模验证具身CoT的最优形式，提出表示塑造监督新范式，避免推理不稳定，SOTA性能。",
      "reasonTags": [
        "具身思维链",
        "VLA",
        "表示学习",
        "机器人操作"
      ],
      "innovationPoints": [
        "构建含97.8万轨迹的全球最大具身CoT数据集",
        "揭示有效具身CoT应提供具体动作引导而非高层推理",
        "推理丢弃策略使模型吸收CoT知识但直接预测动作，消除自回归风险"
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
      "score": 88,
      "importanceLevel": "A",
      "oneSentenceSummary": "TTT-VLA：通过测试时潜在提示优化实现VLA模型部署适配的框架。",
      "summaryCn": "TTT-VLA提出基于潜在提示优化（LPO）的测试时训练方法。训练时学习一个潜在提示作为附加条件信号；部署时收集少量交互数据，仅优化该潜在提示而非策略模型。在SimplerEnv上的实验显示，该方法在单/多实体设置下持续提升任务成功率，且增益主要来自纠正少量关键决策。证明了LPO是基础操作策略部署时提升的有效实用途径。",
      "whyImportant": "无需修改VLA模型权重，仅通过轻量提示优化实现分布外自适应，部署友好。",
      "reasonTags": [
        "测试时训练",
        "VLA",
        "提示优化",
        "策略自适应"
      ],
      "innovationPoints": [
        "首次将测试时训练引入VLA，通过优化潜在提示适应新环境",
        "提示优化通过代理任务的自监督信号进行，无需外部指导",
        "发现性能提升源于纠正少量关键决策，而非全局策略改变"
      ]
    },
    {
      "id": "2606.03188v1",
      "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
      "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision.",
      "summaryRaw": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time. Nevertheless, existing WAMs mainly rely on RGB-based future prediction, which provides limited structural and spatial understanding of complex environments. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision. Alongside future RGB prediction, our model introduces two auxiliary prediction branches for future geometry and semantic representations, enabling it to jointly capture scene dynamics, spatial geometry, and semantic context within a unified latent space. Crucially, our approach preserves efficient inference by avoiding explicit future rollout or video generation at test time. Extensive experiments show that incorporating structured world supervision consistently improves action prediction accuracy, scene understanding, and robustness under challenging embodied scenarios, highlighting its potential for advancing scalable and efficient WAMs.",
      "link": "https://arxiv.org/abs/2606.03188v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03188v1",
      "published": "2026-06-02T05:48:02Z",
      "updated": "2026-06-02T05:48:02Z",
      "authors": [
        "Fulong Ma",
        "Daojie Peng",
        "Wenjun Yue",
        "Jiahang Cao",
        "Bintao Wang",
        "Qiang Zhang",
        "Jun Ma"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 87,
      "importanceLevel": "A",
      "oneSentenceSummary": "GeoSem-WAM：联合几何与语义监督的结构化世界动作模型，增强潜在表示。",
      "summaryCn": "GeoSem-WAM针对现有世界动作模型仅依赖RGB预测而缺乏结构理解的问题，引入辅助的几何和语义预测分支，与未来RGB预测联合训练。模型在统一潜在空间中捕获场景动态、空间几何和语义上下文，但推理时不进行显式未来想象或视频生成。大量实验表明，结构化监督持续提升动作预测准确度、场景理解与鲁棒性，为高效世界动作模型提供新方向。",
      "whyImportant": "揭示WAM优势来自表示学习，提出几何与语义监督增强表示，推理高效，性能显著提升。",
      "reasonTags": [
        "世界动作模型",
        "表示学习",
        "几何语义融合",
        "高效推理"
      ],
      "innovationPoints": [
        "明确论证WAM主要通过表示学习而非未来想象带来收益",
        "双分支预测未来几何和语义表示，联合建模场景结构",
        "推理时不增加额外计算，保持高效"
      ]
    },
    {
      "id": "2606.03240v1",
      "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
      "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) feature…",
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
      "score": 86,
      "importanceLevel": "A",
      "oneSentenceSummary": "GeoAlign：状态引导的空间对齐架构，为VLA策略注入3D几何感知。",
      "summaryCn": "GeoAlign后训练一个RGB几何分支，利用机器人域RGB-D监督得到几何增强特征，并通过本体感受状态查询产生紧致的几何令牌用于动作预测。在LIBERO上达99.0%，SimplerEnv-Fractal任务上85.3%，8个几何关键的ALOHA真实世界任务上78.8%，实验证明几何后训练和本体感受查询的价值。",
      "whyImportant": "突破VLA仅依赖语义的局限，显式注入3D几何信息，大幅提升操作精度和泛化。",
      "reasonTags": [
        "VLA",
        "空间对齐",
        "几何感知",
        "机器人操作"
      ],
      "innovationPoints": [
        "在VLA中引入独立几何分支，通过RGB-D后训练获得几何特征",
        "利用机器人状态从特征网格中动态提取几何令牌，实现任务阶段的依赖",
        "无需在线深度估计，仅用离线训练几何分支，保证实时性"
      ]
    },
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
      "oneSentenceSummary": "OpenEAI-Platform：软硬件统一的开源具身人工智能平台，含低成本机械臂和VLA模型。",
      "summaryCn": "OpenEAI-Platform提供完全开源的6+1自由度机械臂设计和可复现的VLA模型。机械臂采用开源设计和柔性控制，模型以Qwen3-VL-4B为核心，使用Diffusion Transformer动作头，两阶段训练仅用开源数据集。在四个真实操作任务中，机械臂性能优于两款商用臂；VLA模型成功率与大规模预训练的pi0基线相当。全流程开源，支持可重复研究和数据收集。",
      "whyImportant": "首个全开源VLA软硬件平台，低成本高性能，促进社区可复现研究和数据规模化。",
      "reasonTags": [
        "开源平台",
        "VLA",
        "机器人硬件",
        "数据收集"
      ],
      "innovationPoints": [
        "联合开源机械臂设计与VLA模型，实现从硬件到策略的全栈开放",
        "仅用开源数据训练，性能可比肩大规模预训练模型",
        "低成本设计降低具身AI研究门槛"
      ]
    },
    {
      "id": "2606.03943v1",
      "title": "PointAction: 3D Points as Universal Action Representations for Robot Control",
      "summary": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling.",
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
      "score": 84,
      "importanceLevel": "A",
      "oneSentenceSummary": "PointAction：以动态3D点云作为通用动作接口，连接视频生成与机器人控制。",
      "summaryCn": "PointAction微调基础视频生成模型联合预测RGB帧和动态3D点图，产生场景几何的时序一致运动；这些点动态作为结构化、实体无关的动作接口，由扩散动作解码器转换为可执行动作。在机器人场景达到最优4D生成质量，仿真和真实两种未见机器人臂上均超越基线。",
      "whyImportant": "用几何显式的3D点运动作为中间表示，解决RGB视频到动作的歧义，支持跨实体迁移。",
      "reasonTags": [
        "视频动作模型",
        "通用动作接口",
        "3D点动态",
        "跨实体泛化"
      ],
      "innovationPoints": [
        "提出点动态作为视频预测和动作控制的桥梁，弥合语义与几何鸿沟",
        "联合生成未来RGB和3D点图，保持时空一致性",
        "实现跨任务和跨机器人实体的有限动作监督迁移"
      ]
    },
    {
      "id": "2606.03556v1",
      "title": "Partially Observable Adversarial Patch Attacks on Vision-Language-Action Models in Robotics",
      "summary": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice.",
      "summaryRaw": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice. We address this limitation by formulating a partially observable threat model, where the adversary can exploit only a short prefix of the trajectory to generate a fixed patch applied to all subsequent frames. Under this setting, we propose a two-phase framework. First, we localize the patch using the model's attention maps to identify visually critical regions that correspond to the full instruction. Then, we optimize the patch to disrupt the semantic grounding of target objects and increase the curvature of action trajectories, thereby compounding failures in both perception and control. Extensive experiments in simulation and real-world robotic environments show that our method sustains adversarial effects under partial observability, inducing long-horizon disruptions and significantly reducing task success rates.",
      "link": "https://arxiv.org/abs/2606.03556v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03556v1",
      "published": "2026-06-02T12:19:28Z",
      "updated": "2026-06-02T12:19:28Z",
      "authors": [
        "Xiaofei Wang",
        "Mingliang Han",
        "Tianyu Hao",
        "Yi Yang",
        "Yun-Bo Zhao",
        "Keke Tang"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 82,
      "importanceLevel": "A",
      "oneSentenceSummary": "针对VLA机器人的部分可观测对抗补丁攻击，揭示安全漏洞。",
      "summaryCn": "本文研究VLA模型在部分可观测下的对抗鲁棒性，提出威胁模型仅利用轨迹短前缀生成固定补丁。两阶段框架先利用注意力图定位关键视觉区域，再优化补丁破坏目标语义接地并增大动作曲率。仿真和真实环境实验表明，攻击在长时间跨度内持续有效，显著降低任务成功率。",
      "whyImportant": "首次揭示VLA在部分可观测条件下的脆弱性，为机器人安全部署提供新的评估视角。",
      "reasonTags": [
        "对抗攻击",
        "VLA安全",
        "部分可观测",
        "机器人鲁棒性"
      ],
      "innovationPoints": [
        "提出部分可观测威胁模型，仅需轨迹前缀生成通用补丁",
        "联合破坏感知语义和动作曲率，实现复合式攻击",
        "真实机器人实验验证跨域攻击效果"
      ]
    },
    {
      "id": "2606.03385v1",
      "title": "Grasp-Then-Plan with Failure Attribution: A Closed Two-Stage Framework for Precise and Generalizable Robotic Manipulation",
      "summary": "In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial-and-error. We evaluate the proposed framework in both simulation and real-robot experiments, and show that GTP-FA improves the corresponding base learners across RL, IL, diffusion-policy…",
      "summaryRaw": "In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial-and-error. To enable efficient long-horizon manipulation, we propose GTP-FA (Grasp-Then-Plan with Failure Attribution), a task-oriented two-stage grasp-then-plan framework that generates grasp candidates and performs downstream motion planning conditioned on the selected grasp. Given a failed manipulation trajectory, we learn a failure attribution model that generalizes to unseen grasps and produces a stable distribution over failure modes for diagnosis-guided optimization. Based on these attribution results, we then optimize both modules in a diagnosis-driven manner: on the grasping side, we inject task-level priors and risk penalties into grasp candidate scoring and optimization to suppress unstable or task-incompatible grasps; on the planning side, we target high-risk initial states through data collection and fine-tuning to address genuine planning bottlenecks. We evaluate the proposed framework in both simulation and real-robot experiments, and show that GTP-FA improves the corresponding base learners across RL, IL, diffusion-policy, and VLA-based settings, achieving substantially higher overall task success rates.",
      "link": "https://arxiv.org/abs/2606.03385v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03385v1",
      "published": "2026-06-02T09:29:03Z",
      "updated": "2026-06-02T09:29:03Z",
      "authors": [
        "Jiahao Xu",
        "Peiyuan Wang",
        "Hanzhuo Zhang",
        "Zihao Yu",
        "Tianyu Fu",
        "Hao Chen",
        "Xuanhao Xiang",
        "Jianbo Yu"
      ],
      "categories": [
        "cs.RO",
        "cs.AI"
      ],
      "score": 80,
      "importanceLevel": "A",
      "oneSentenceSummary": "GTP-FA：基于失败归因的“先抓后规划”闭环框架，提升VLA操控成功率。",
      "summaryCn": "GTP-FA提出任务导向的两阶段抓取-规划框架，通过失败归因模型定位故障模块（抓取或规划）。基于诊断结果，在抓取端注入任务先验和风险惩罚优化抓取评分，在规划端针对性采集高风险状态数据微调规划器。支持RL、IL、扩散策略和VLA等多种基座，仿真和真实实验均大幅提升整体任务成功率。",
      "whyImportant": "将失败诊断引入VLA操控流水线，实现模块化优化，有效提升长序任务成功率。",
      "reasonTags": [
        "失败归因",
        "抓取规划",
        "VLA操控",
        "闭环优化"
      ],
      "innovationPoints": [
        "可泛化的失败归因模型，诊断抓取与规划的故障模式",
        "诊断驱动的抓取评分优化和规划微调，针对性解决瓶颈",
        "适用于多种策略基座，包括VLA和扩散策略"
      ]
    }
  ],
  "archives": [
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-03T13:43:33.922278+00:00",
      "paperCount": 10,
      "papers": [
        {
          "id": "2606.03159v1",
          "title": "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation",
          "summary": "Deployed in a closed-loop system with the Alpamayo 1 policy model and AlpaSim orchestrator, OmniDreams acts as a highly responsive, reactive environment, providing a scalable and comprehensive solution for training and evaluating next-generation autonomous driving policies. We additionally show preliminary results indicating that a world…",
          "summaryRaw": "As autonomous vehicle capabilities advance, the safe evaluation of driving policies in long-tail scenarios remains a critical bottleneck. In closed-loop simulation, the driving policy model actively interacts with the environment, where its actions dynamically update the simulator state and directly influence the next set of generated sensor observations. While recent reconstruction-based neural simulators offer photorealism, they are fundamentally constrained by their initial captured data and struggle to generalize to highly dynamic or novel scenes. To overcome these limitations, we introduce OmniDreams, a foundation generative world model mid- and post-trained from the Cosmos diffusion model to autoregressively generate action-conditioned videos in real time. By leveraging the rich visual priors of Cosmos and mid- and post-training on 21k hours of driving scenarios, OmniDreams synthesizes complex, unobserved phenomena that are hard for traditional simulators to capture, such as extreme weather and unpredictable dynamic agent behaviors. Crucially, it autoregressively conditions its photorealistic sensor generation on past frames, the current simulator state, and immediate driving actions. Deployed in a closed-loop system with the Alpamayo 1 policy model and AlpaSim orchestrator, OmniDreams acts as a highly responsive, reactive environment, providing a scalable and comprehensive solution for training and evaluating next-generation autonomous driving policies. We additionally show preliminary results indicating that a world-action model (WAM) post-trained from OmniDreams achieves strong performance on the Physical AI Autonomous Vehicles NuRec dataset, surpassing the VLA-based Alpamayo 1.5 research policy model while using only 1/5 the total parameters. These results highlight the potential for a real-time world model like OmniDreams to also serve as a backbone for policy architectures.",
          "link": "https://arxiv.org/abs/2606.03159v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03159v1",
          "published": "2026-06-02T05:11:05Z",
          "updated": "2026-06-02T05:11:05Z",
          "authors": [
            "NVIDIA",
            ":",
            "Aarti Basant",
            "Amlan Kar",
            "Despoina Paschalidou",
            "Fangyin Wei",
            "Francesco Ferroni",
            "Guillermo Garcia Cobo"
          ],
          "categories": [
            "cs.CV",
            "cs.AI",
            "cs.RO"
          ],
          "score": 97,
          "importanceLevel": "S",
          "oneSentenceSummary": "OmniDreams：基于Cosmos扩散模型的实时生成式世界模型，用于自动驾驶闭环仿真。",
          "summaryCn": "OmniDreams是一个基础生成世界模型，以Cosmos扩散模型为骨干，在21k小时驾驶数据上中后训练，能够根据历史帧、仿真状态和驾驶动作自回归生成逼真视频。用于闭环仿真时，与Alpamayo 1策略模型配合，可模拟极端天气和动态agent行为。后训练的世界-动作模型（WAM）在NuRec数据集上以1/5参数量超过VLA基线，展现了作为策略骨干的潜力。",
          "whyImportant": "首个实时生成式世界动作模型用于自动驾驶闭环测评，兼具仿真与策略学习能力，规模与性能突出。",
          "reasonTags": [
            "世界动作模型",
            "自动驾驶仿真",
            "实时生成",
            "闭环"
          ],
          "innovationPoints": [
            "基于Cosmos扩散模型，首次实现实时自回归视频生成用于自动驾驶闭环仿真",
            "世界模型可后训练为世界-动作模型，参数量小但性能超越VLA策略",
            "模拟长尾场景（极端天气、动态agent），突破传统重建仿真器的局限"
          ]
        },
        {
          "id": "2606.03598v1",
          "title": "PHASER: Phase-Aware and Semantic Experience Replay for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models have achieved remarkable success in language-conditioned robotic manipulation. While experience replay (ER) serves as a standard mitigating strategy, naive uniform sampling fundamentally misaligns with the temporal characteristics of manipulation trajectories.",
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
          "score": 95,
          "importanceLevel": "S",
          "oneSentenceSummary": "PHASER：面向VLA模型的阶段感知语义经验回放持续学习框架。",
          "summaryCn": "PHASER是一种架构无关的持续学习框架，针对VLA模型在开放环境中的灾难性遗忘问题。它采用阶段中心的容量分配确保所有子技能获得均等记忆支持，并利用多模态干扰路由动态优先回放高风险历史阶段。还集成了自动阶段分割流水线Auto-PC，利用无监督动作变化点检测和VLM语义验证。在LIBERO持续学习套件上，PHASER将平均成功率提升高达31%，最终成功率87.8%。",
          "whyImportant": "解决VLA持续学习中的阶段匮乏和遗忘不均问题，大幅提升在线学习性能，无需架构修改。",
          "reasonTags": [
            "VLA持续学习",
            "经验回放",
            "阶段感知",
            "灾难性遗忘"
          ],
          "innovationPoints": [
            "阶段中心的容量分配避免对短暂关键子技能的采样不足",
            "多模态干扰路由根据遗忘风险动态调整回放优先级",
            "Auto-PC实现无监督的自动阶段分割，减少人工标注"
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
          "score": 94,
          "importanceLevel": "S",
          "oneSentenceSummary": "ERVLA：利用具身思维链作为表示塑造监督的VLA模型，避免自回归推理不稳定。",
          "summaryCn": "ERVLA构建了最大的具身思维链语料库，发现有效的思维链应将高层语义理解落地为具体动作引导，如末端执行器运动和图像空间轨迹。提出将思维链作为训练时表示塑造监督，而非测试时必须的推理前缀，通过推理丢弃策略避免自回归耦合错误。ERVLA在LIBERO-Plus上达86.9%成功率，VLABench上53.2%，真实机器人实验中表现优于同规模基线。",
          "whyImportant": "大规模验证具身CoT的最优形式，提出表示塑造监督新范式，避免推理不稳定，SOTA性能。",
          "reasonTags": [
            "具身思维链",
            "VLA",
            "表示学习",
            "机器人操作"
          ],
          "innovationPoints": [
            "构建含97.8万轨迹的全球最大具身CoT数据集",
            "揭示有效具身CoT应提供具体动作引导而非高层推理",
            "推理丢弃策略使模型吸收CoT知识但直接预测动作，消除自回归风险"
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
          "score": 88,
          "importanceLevel": "A",
          "oneSentenceSummary": "TTT-VLA：通过测试时潜在提示优化实现VLA模型部署适配的框架。",
          "summaryCn": "TTT-VLA提出基于潜在提示优化（LPO）的测试时训练方法。训练时学习一个潜在提示作为附加条件信号；部署时收集少量交互数据，仅优化该潜在提示而非策略模型。在SimplerEnv上的实验显示，该方法在单/多实体设置下持续提升任务成功率，且增益主要来自纠正少量关键决策。证明了LPO是基础操作策略部署时提升的有效实用途径。",
          "whyImportant": "无需修改VLA模型权重，仅通过轻量提示优化实现分布外自适应，部署友好。",
          "reasonTags": [
            "测试时训练",
            "VLA",
            "提示优化",
            "策略自适应"
          ],
          "innovationPoints": [
            "首次将测试时训练引入VLA，通过优化潜在提示适应新环境",
            "提示优化通过代理任务的自监督信号进行，无需外部指导",
            "发现性能提升源于纠正少量关键决策，而非全局策略改变"
          ]
        },
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision.",
          "summaryRaw": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time. Nevertheless, existing WAMs mainly rely on RGB-based future prediction, which provides limited structural and spatial understanding of complex environments. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision. Alongside future RGB prediction, our model introduces two auxiliary prediction branches for future geometry and semantic representations, enabling it to jointly capture scene dynamics, spatial geometry, and semantic context within a unified latent space. Crucially, our approach preserves efficient inference by avoiding explicit future rollout or video generation at test time. Extensive experiments show that incorporating structured world supervision consistently improves action prediction accuracy, scene understanding, and robustness under challenging embodied scenarios, highlighting its potential for advancing scalable and efficient WAMs.",
          "link": "https://arxiv.org/abs/2606.03188v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03188v1",
          "published": "2026-06-02T05:48:02Z",
          "updated": "2026-06-02T05:48:02Z",
          "authors": [
            "Fulong Ma",
            "Daojie Peng",
            "Wenjun Yue",
            "Jiahang Cao",
            "Bintao Wang",
            "Qiang Zhang",
            "Jun Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 87,
          "importanceLevel": "A",
          "oneSentenceSummary": "GeoSem-WAM：联合几何与语义监督的结构化世界动作模型，增强潜在表示。",
          "summaryCn": "GeoSem-WAM针对现有世界动作模型仅依赖RGB预测而缺乏结构理解的问题，引入辅助的几何和语义预测分支，与未来RGB预测联合训练。模型在统一潜在空间中捕获场景动态、空间几何和语义上下文，但推理时不进行显式未来想象或视频生成。大量实验表明，结构化监督持续提升动作预测准确度、场景理解与鲁棒性，为高效世界动作模型提供新方向。",
          "whyImportant": "揭示WAM优势来自表示学习，提出几何与语义监督增强表示，推理高效，性能显著提升。",
          "reasonTags": [
            "世界动作模型",
            "表示学习",
            "几何语义融合",
            "高效推理"
          ],
          "innovationPoints": [
            "明确论证WAM主要通过表示学习而非未来想象带来收益",
            "双分支预测未来几何和语义表示，联合建模场景结构",
            "推理时不增加额外计算，保持高效"
          ]
        },
        {
          "id": "2606.03240v1",
          "title": "GeoAlign: Beyond Semantics with State-Guided Spatial Alignment in VLA Models",
          "summary": "Current Vision--Language--Action (VLA) models often optimize for semantic grounding, whereas executable manipulation requires geometry-aware spatial alignment and dynamic affordance selection. GeoAlign post-trains an RGB geometry branch with robot-domain RGB-D supervision, yielding RGB-derived Geometry-Enhanced Post-Trained (GEP) feature…",
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
          "score": 86,
          "importanceLevel": "A",
          "oneSentenceSummary": "GeoAlign：状态引导的空间对齐架构，为VLA策略注入3D几何感知。",
          "summaryCn": "GeoAlign后训练一个RGB几何分支，利用机器人域RGB-D监督得到几何增强特征，并通过本体感受状态查询产生紧致的几何令牌用于动作预测。在LIBERO上达99.0%，SimplerEnv-Fractal任务上85.3%，8个几何关键的ALOHA真实世界任务上78.8%，实验证明几何后训练和本体感受查询的价值。",
          "whyImportant": "突破VLA仅依赖语义的局限，显式注入3D几何信息，大幅提升操作精度和泛化。",
          "reasonTags": [
            "VLA",
            "空间对齐",
            "几何感知",
            "机器人操作"
          ],
          "innovationPoints": [
            "在VLA中引入独立几何分支，通过RGB-D后训练获得几何特征",
            "利用机器人状态从特征网格中动态提取几何令牌，实现任务阶段的依赖",
            "无需在线深度估计，仅用离线训练几何分支，保证实时性"
          ]
        },
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
          "oneSentenceSummary": "OpenEAI-Platform：软硬件统一的开源具身人工智能平台，含低成本机械臂和VLA模型。",
          "summaryCn": "OpenEAI-Platform提供完全开源的6+1自由度机械臂设计和可复现的VLA模型。机械臂采用开源设计和柔性控制，模型以Qwen3-VL-4B为核心，使用Diffusion Transformer动作头，两阶段训练仅用开源数据集。在四个真实操作任务中，机械臂性能优于两款商用臂；VLA模型成功率与大规模预训练的pi0基线相当。全流程开源，支持可重复研究和数据收集。",
          "whyImportant": "首个全开源VLA软硬件平台，低成本高性能，促进社区可复现研究和数据规模化。",
          "reasonTags": [
            "开源平台",
            "VLA",
            "机器人硬件",
            "数据收集"
          ],
          "innovationPoints": [
            "联合开源机械臂设计与VLA模型，实现从硬件到策略的全栈开放",
            "仅用开源数据训练，性能可比肩大规模预训练模型",
            "低成本设计降低具身AI研究门槛"
          ]
        },
        {
          "id": "2606.03943v1",
          "title": "PointAction: 3D Points as Universal Action Representations for Robot Control",
          "summary": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling.",
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
          "score": 84,
          "importanceLevel": "A",
          "oneSentenceSummary": "PointAction：以动态3D点云作为通用动作接口，连接视频生成与机器人控制。",
          "summaryCn": "PointAction微调基础视频生成模型联合预测RGB帧和动态3D点图，产生场景几何的时序一致运动；这些点动态作为结构化、实体无关的动作接口，由扩散动作解码器转换为可执行动作。在机器人场景达到最优4D生成质量，仿真和真实两种未见机器人臂上均超越基线。",
          "whyImportant": "用几何显式的3D点运动作为中间表示，解决RGB视频到动作的歧义，支持跨实体迁移。",
          "reasonTags": [
            "视频动作模型",
            "通用动作接口",
            "3D点动态",
            "跨实体泛化"
          ],
          "innovationPoints": [
            "提出点动态作为视频预测和动作控制的桥梁，弥合语义与几何鸿沟",
            "联合生成未来RGB和3D点图，保持时空一致性",
            "实现跨任务和跨机器人实体的有限动作监督迁移"
          ]
        },
        {
          "id": "2606.03556v1",
          "title": "Partially Observable Adversarial Patch Attacks on Vision-Language-Action Models in Robotics",
          "summary": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice.",
          "summaryRaw": "Vision-language-action (VLA) models are gaining attention in robotics, yet their robustness to adversarial attacks remains largely unexplored. Existing work shows that adversarial patches can mislead VLA-based robots but assumes full access to the entire execution trajectory, an unrealistic requirement in practice. We address this limitation by formulating a partially observable threat model, where the adversary can exploit only a short prefix of the trajectory to generate a fixed patch applied to all subsequent frames. Under this setting, we propose a two-phase framework. First, we localize the patch using the model's attention maps to identify visually critical regions that correspond to the full instruction. Then, we optimize the patch to disrupt the semantic grounding of target objects and increase the curvature of action trajectories, thereby compounding failures in both perception and control. Extensive experiments in simulation and real-world robotic environments show that our method sustains adversarial effects under partial observability, inducing long-horizon disruptions and significantly reducing task success rates.",
          "link": "https://arxiv.org/abs/2606.03556v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03556v1",
          "published": "2026-06-02T12:19:28Z",
          "updated": "2026-06-02T12:19:28Z",
          "authors": [
            "Xiaofei Wang",
            "Mingliang Han",
            "Tianyu Hao",
            "Yi Yang",
            "Yun-Bo Zhao",
            "Keke Tang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 82,
          "importanceLevel": "A",
          "oneSentenceSummary": "针对VLA机器人的部分可观测对抗补丁攻击，揭示安全漏洞。",
          "summaryCn": "本文研究VLA模型在部分可观测下的对抗鲁棒性，提出威胁模型仅利用轨迹短前缀生成固定补丁。两阶段框架先利用注意力图定位关键视觉区域，再优化补丁破坏目标语义接地并增大动作曲率。仿真和真实环境实验表明，攻击在长时间跨度内持续有效，显著降低任务成功率。",
          "whyImportant": "首次揭示VLA在部分可观测条件下的脆弱性，为机器人安全部署提供新的评估视角。",
          "reasonTags": [
            "对抗攻击",
            "VLA安全",
            "部分可观测",
            "机器人鲁棒性"
          ],
          "innovationPoints": [
            "提出部分可观测威胁模型，仅需轨迹前缀生成通用补丁",
            "联合破坏感知语义和动作曲率，实现复合式攻击",
            "真实机器人实验验证跨域攻击效果"
          ]
        },
        {
          "id": "2606.03385v1",
          "title": "Grasp-Then-Plan with Failure Attribution: A Closed Two-Stage Framework for Precise and Generalizable Robotic Manipulation",
          "summary": "In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial-and-error. We evaluate the proposed framework in both simulation and real-robot experiments, and show that GTP-FA improves the corresponding base learners across RL, IL, diffusion-policy…",
          "summaryRaw": "In robotic manipulation, the tight coupling between grasping and motion planning often obscures the true source of failure, leading to inefficient trial-and-error. To enable efficient long-horizon manipulation, we propose GTP-FA (Grasp-Then-Plan with Failure Attribution), a task-oriented two-stage grasp-then-plan framework that generates grasp candidates and performs downstream motion planning conditioned on the selected grasp. Given a failed manipulation trajectory, we learn a failure attribution model that generalizes to unseen grasps and produces a stable distribution over failure modes for diagnosis-guided optimization. Based on these attribution results, we then optimize both modules in a diagnosis-driven manner: on the grasping side, we inject task-level priors and risk penalties into grasp candidate scoring and optimization to suppress unstable or task-incompatible grasps; on the planning side, we target high-risk initial states through data collection and fine-tuning to address genuine planning bottlenecks. We evaluate the proposed framework in both simulation and real-robot experiments, and show that GTP-FA improves the corresponding base learners across RL, IL, diffusion-policy, and VLA-based settings, achieving substantially higher overall task success rates.",
          "link": "https://arxiv.org/abs/2606.03385v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03385v1",
          "published": "2026-06-02T09:29:03Z",
          "updated": "2026-06-02T09:29:03Z",
          "authors": [
            "Jiahao Xu",
            "Peiyuan Wang",
            "Hanzhuo Zhang",
            "Zihao Yu",
            "Tianyu Fu",
            "Hao Chen",
            "Xuanhao Xiang",
            "Jianbo Yu"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 80,
          "importanceLevel": "A",
          "oneSentenceSummary": "GTP-FA：基于失败归因的“先抓后规划”闭环框架，提升VLA操控成功率。",
          "summaryCn": "GTP-FA提出任务导向的两阶段抓取-规划框架，通过失败归因模型定位故障模块（抓取或规划）。基于诊断结果，在抓取端注入任务先验和风险惩罚优化抓取评分，在规划端针对性采集高风险状态数据微调规划器。支持RL、IL、扩散策略和VLA等多种基座，仿真和真实实验均大幅提升整体任务成功率。",
          "whyImportant": "将失败诊断引入VLA操控流水线，实现模块化优化，有效提升长序任务成功率。",
          "reasonTags": [
            "失败归因",
            "抓取规划",
            "VLA操控",
            "闭环优化"
          ],
          "innovationPoints": [
            "可泛化的失败归因模型，诊断抓取与规划的故障模式",
            "诊断驱动的抓取评分优化和规划微调，针对性解决瓶颈",
            "适用于多种策略基座，包括VLA和扩散策略"
          ]
        }
      ]
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
